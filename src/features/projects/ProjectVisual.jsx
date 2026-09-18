import Icon from "../../components/ui/Icon";

function EvidenceCaption({ icon, children }) {
  return (
    <div className="absolute right-4 bottom-4 left-4 z-10 flex items-center justify-center gap-2 border border-white/30 bg-slate-950/80 px-3 py-2 text-center font-mono text-[0.7rem] font-semibold tracking-wide text-white uppercase">
      <Icon name={icon} />
      <span>{children}</span>
    </div>
  );
}

export default function ProjectVisual({ project }) {
  const { visual } = project;
  const base = import.meta.env.BASE_URL;

  if (visual.type === "moneyboys") {
    return (
      <div className="relative order-1 min-h-[27rem] overflow-hidden bg-black lg:order-2 lg:min-h-full">
        <img
          className="absolute inset-0 size-full object-cover object-center brightness-75"
          src={`${base}${visual.logo}`}
          alt="Official MoneyBoys logo from the project repository"
          loading="lazy"
          width="1024"
          height="1024"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-950/20 to-slate-950/80" />
        <img
          className="absolute top-[6%] right-[7%] z-10 max-h-[82%] w-[42%] max-w-64 rotate-3 rounded-3xl border-[0.45rem] border-white/90 object-contain shadow-2xl transition-transform duration-300 group-hover:-translate-y-2 group-hover:rotate-1"
          src={`${base}${visual.screenshot}`}
          alt="MoneyBoys sign-in screen captured from the running Flutter project"
          loading="lazy"
          width="600"
          height="1067"
        />
        <EvidenceCaption icon="play">{visual.label}</EvidenceCaption>
      </div>
    );
  }

  if (visual.type === "gallery") {
    return (
      <div
        className={`relative order-1 flex min-h-[27rem] items-center justify-center overflow-hidden lg:order-2 lg:min-h-full ${visual.theme}`}
      >
        <div className="absolute inset-5 bottom-16 flex items-center justify-center gap-2 sm:gap-4">
          {visual.images.map(([src, alt], index) => (
            <img
              key={src}
              className={`max-h-full w-[29%] max-w-48 rounded-2xl border-[0.4rem] border-white/85 object-contain shadow-2xl transition-transform duration-300 ${index === 1 ? "z-10 -translate-y-2 group-hover:-translate-y-3" : index === 0 ? "rotate-[-4deg] group-hover:rotate-[-6deg]" : "rotate-[4deg] group-hover:rotate-[6deg]"}`}
              src={`${base}${src}`}
              alt={alt}
              loading="lazy"
              width="783"
              height="1392"
            />
          ))}
        </div>
        <EvidenceCaption icon="info">{visual.label}</EvidenceCaption>
      </div>
    );
  }

  return (
    <div
      className={`relative order-1 grid min-h-[27rem] place-items-center overflow-hidden p-8 lg:order-2 lg:min-h-full ${visual.theme}`}
    >
      <div className="w-full max-w-[34rem] border border-white/25 bg-slate-950/75 p-8 text-white shadow-2xl">
        <span className="grid size-16 place-items-center rounded-full bg-brand text-white">
          <Icon name="radio-tower" />
        </span>
        <small className="mt-5 block font-mono text-[0.7rem] font-bold tracking-widest text-white/65">
          CONNECTED SYSTEM PROTOTYPE
        </small>
        <h4 className="mt-2 text-[clamp(1.8rem,3vw,2.65rem)] leading-tight font-bold">
          From sensor readings to a live interface.
        </h4>
        <div className="mt-6 flex items-center gap-2 font-mono text-xs font-bold">
          <span className="flex-1 border border-white/20 p-3 text-center">
            ESP32
          </span>
          <Icon name="arrow-right" />
          <span className="flex-1 border border-white/20 p-3 text-center">
            MQTT
          </span>
          <Icon name="arrow-right" />
          <span className="flex-1 border border-white/20 p-3 text-center">
            FLUTTER
          </span>
        </div>
        <p className="mt-5 text-sm leading-relaxed text-white/75">
          Embedded firmware, realtime transport and a monitoring interface in
          one connected flow.
        </p>
      </div>
      <EvidenceCaption icon="github">{visual.label}</EvidenceCaption>
    </div>
  );
}
