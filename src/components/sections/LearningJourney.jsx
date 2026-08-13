import Icon from "../ui/Icon";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import BackendFoundationsCard from "../learning/BackendFoundationsCard";
import FlutterTestingCard from "../learning/FlutterTestingCard";
import EndToEndDeliveryCard from "../learning/EndToEndDeliveryCard";
import RelationalDataCard from "../learning/RelationalDataCard";
import ReliableDeliveryCard from "../learning/ReliableDeliveryCard";

const cards = [
  BackendFoundationsCard,
  FlutterTestingCard,
  EndToEndDeliveryCard,
  RelationalDataCard,
  ReliableDeliveryCard,
];

const topics = [
  "backend foundations",
  "Flutter testing",
  "end-to-end delivery",
  "relational data",
  "reliable delivery",
];

function getVisibleCount() {
  if (innerWidth <= 767) return 1;
  if (innerWidth <= 1023) return 2;
  return 3;
}

export default function LearningJourney() {
  const trackRef = useRef(null);
  const dragStart = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(getVisibleCount);
  const maxIndex = Math.max(cards.length - visibleCount, 0);

  const show = (requestedIndex) => {
    setActiveIndex(
      requestedIndex > maxIndex
        ? 0
        : requestedIndex < 0
          ? maxIndex
          : requestedIndex,
    );
  };

  useEffect(() => {
    const update = () => {
      const nextVisibleCount = getVisibleCount();
      setVisibleCount(nextVisibleCount);
      setActiveIndex((index) =>
        Math.min(index, Math.max(cards.length - nextVisibleCount, 0)),
      );
    };
    addEventListener("resize", update);
    return () => removeEventListener("resize", update);
  }, []);

  useLayoutEffect(() => {
    const track = trackRef.current;
    const slide = track?.querySelectorAll("[data-learning-slide]")[activeIndex];
    if (track)
      track.style.transform = `translate3d(-${slide?.offsetLeft ?? 0}px, 0, 0)`;
  }, [activeIndex, visibleCount]);

  const start = String(activeIndex + 1).padStart(2, "0");
  const end = String(
    Math.min(activeIndex + visibleCount, cards.length),
  ).padStart(2, "0");

  return (
    <section
      className="section section-building"
      id="building"
      aria-labelledby="building-title"
    >
      <div className="container">
        <header className="section-heading section-heading-center" data-reveal>
          <div className="section-badge">
            <span aria-hidden="true">✦</span>
            <span>Now</span>
          </div>
          <h2 id="building-title">What I&apos;m learning now</h2>
          <p>
            The skills I&apos;m actively practicing to connect mobile
            interfaces, backend systems and reliable delivery.
          </p>
        </header>
        <div
          className="learning-slider"
          data-reveal
          role="region"
          aria-roledescription="carousel"
          aria-label="Current learning topics"
          tabIndex={0}
          onKeyDown={(event) => {
            if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key))
              return;
            event.preventDefault();
            if (event.key === "ArrowLeft") show(activeIndex - 1);
            if (event.key === "ArrowRight") show(activeIndex + 1);
            if (event.key === "Home") show(0);
            if (event.key === "End") show(maxIndex);
          }}
          onPointerDown={(event) => {
            dragStart.current = event.clientX;
          }}
          onPointerUp={(event) => {
            if (dragStart.current === null) return;
            const distance = event.clientX - dragStart.current;
            dragStart.current = null;
            if (Math.abs(distance) >= 45)
              show(activeIndex + (distance < 0 ? 1 : -1));
          }}
        >
          <div className="learning-slider-topline">
            <p>
              <span className="learning-pulse" aria-hidden="true" />
              <span>LEARNING LOG</span>
              <strong>
                {start}–{end} / 05
              </strong>
            </p>
            <div className="learning-controls" aria-label="Slider controls">
              <button
                type="button"
                onClick={() => show(activeIndex - 1)}
                aria-label="Show previous learning topic"
              >
                <Icon name="arrow-left" />
              </button>
              <button
                type="button"
                onClick={() => show(activeIndex + 1)}
                aria-label="Show next learning topic"
              >
                <Icon name="arrow-right" />
              </button>
            </div>
          </div>
          <div className="learning-viewport">
            <div ref={trackRef} className="building-grid">
              {cards.map((Card, index) => (
                <Card
                  key={topics[index]}
                  hidden={
                    index < activeIndex || index >= activeIndex + visibleCount
                  }
                />
              ))}
            </div>
          </div>
          <div className="learning-slider-footer">
            <div className="learning-dots" aria-label="Choose a learning topic">
              {topics.map((topic, index) => (
                <button
                  key={topic}
                  type="button"
                  className={index === activeIndex ? "is-active" : undefined}
                  hidden={index > maxIndex}
                  aria-label={`Show ${topic}`}
                  aria-current={index === activeIndex ? "true" : undefined}
                  onClick={() => show(index)}
                />
              ))}
            </div>
            <p className="learning-hint">Drag or use arrow keys to explore</p>
            <p className="sr-only" aria-live="polite">
              Showing {topics[activeIndex]}
            </p>
          </div>
        </div>
        <p className="system-status" data-reveal>
          <span>LEARNING: IN PROGRESS</span>
          <span>FOCUS: FULL-STACK FOUNDATIONS</span>
          <span>TOPICS: 05</span>
          <span>UPDATED: NOW</span>
        </p>
      </div>
    </section>
  );
}
