export const projects = [
  {
    id: "moneyboys",
    name: "MoneyBoys",
    accent: "text-amber-600",
    tags: ["University Team Project", "Finance App"],
    headline: "A shared data layer for everyday finance decisions.",
    description:
      "In a team Flutter project, I worked on data models and CRUD flows that connect transactions, budgets and categories to the product experience and its spending insights.",
    evidence: [
      ["Contribution", "Finance data models · CRUD operations · database work"],
      [
        "Engineering focus",
        "Separate feature state from reusable finance data services",
      ],
      [
        "Tool roles",
        "Supabase for data · BLoC for state · FL Chart for insights",
      ],
      ["Outcome", "Working team prototype · public repository"],
    ],
    flow: [
      { icon: "layout-dashboard", label: "Frontend", value: "Finance UI" },
      { icon: "workflow", label: "Application", value: "Cubit & services" },
      { icon: "database-zap", label: "Backend", value: "Supabase & AI" },
    ],
    repository: "https://github.com/TienTrn05/ProjectFinalMobile-",
    repositoryLabel: "View GitHub",
    hasCaseStudy: true,
    visual: {
      type: "moneyboys",
      label: "Captured from repository build",
      logo: "assets/images/projects/moneyboys-logo.jpg",
      screenshot: "assets/images/projects/moneyboys-signin.png",
    },
  },
  {
    id: "teleprompter",
    name: "Mobile Teleprompter",
    accent: "text-brand",
    tags: ["Team Project", "In Development"],
    headline: "One mobile workflow from script to finished video.",
    description:
      "I built script management, AI-assisted writing and an on-device editing workflow so creators can prepare, record and refine content without leaving the app.",
    evidence: [
      ["Contribution", "Script library · AI writing · mobile media editing"],
      ["Engineering focus", "Keep core writing and project state local-first"],
      [
        "Tool roles",
        "BLoC for state · Camera for capture · FFmpeg for transforms",
      ],
      [
        "Project context",
        "Team project · repository private · UI shown as reference",
      ],
    ],
    flow: [
      { icon: "smartphone", label: "Experience", value: "Write & edit" },
      { icon: "boxes", label: "Application", value: "Flutter BLoC" },
      { icon: "cpu", label: "Platform", value: "Camera · FFmpeg" },
    ],
    repository: "https://github.com/mxtruongplayboy/Mobile.Teleprompter",
    repositoryLabel: "Private GitHub",
    visual: {
      type: "gallery",
      theme: "bg-gradient-to-br from-emerald-200 via-cyan-300 to-indigo-500",
      label: "Visual reference only · Not a repository build",
      images: [
        [
          "assets/images/projects/teleprompter-appstore-01.png",
          "Teleprompter UI reference showing floating scripts",
        ],
        [
          "assets/images/projects/teleprompter-appstore-02.png",
          "Teleprompter UI reference showing script controls",
        ],
        [
          "assets/images/projects/teleprompter-appstore-03.png",
          "Teleprompter UI reference showing live video prompting",
        ],
      ],
    },
  },
  {
    id: "sky-tonight",
    name: "Sky Tonight",
    accent: "text-indigo-500",
    tags: ["Team Project", "Astronomy App"],
    headline: "Plan what is visible in the night sky.",
    description:
      "I worked on a Flutter dashboard that combines location, time and catalog-backed calculations to surface relevant celestial objects for an observing session.",
    evidence: [
      ["Contribution", "Dashboard · location flows · data services · sorting"],
      [
        "Engineering focus",
        "Derive the visible list from location, time and catalog data",
      ],
      [
        "Tool roles",
        "Flutter for UI · HTTP for data · local storage for cache",
      ],
      [
        "Project context",
        "Team repository · interface shown as visual reference",
      ],
    ],
    flow: [
      { icon: "map-pin", label: "Input", value: "Location & time" },
      { icon: "binary", label: "Data logic", value: "Visibility services" },
      { icon: "telescope", label: "Experience", value: "Visible Tonight" },
    ],
    repository:
      "https://github.com/freeaiutils/Mobile.Sky-Tonight/tree/develop",
    repositoryLabel: "Repository Link",
    visual: {
      type: "gallery",
      theme: "bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-800",
      label: "Visual reference only · Not a repository build",
      images: [
        [
          "assets/images/projects/sky-appstore-01.png",
          "Sky Tonight UI reference showing an augmented sky map",
        ],
        [
          "assets/images/projects/sky-appstore-02.png",
          "Sky Tonight UI reference showing planet search",
        ],
        [
          "assets/images/projects/sky-appstore-03.png",
          "Sky Tonight UI reference showing satellite passes",
        ],
      ],
    },
  },
  {
    id: "health-monitor",
    name: "IoT Health Monitor",
    accent: "text-rose-600",
    tags: ["Course Project", "IoT Prototype"],
    headline: "Connecting sensor data to a realtime health dashboard.",
    description:
      "An academic prototype exploring how ESP32 sensor readings can move through MQTT into a Flutter dashboard for live vitals, fall alerts and history.",
    evidence: [
      [
        "Contribution",
        "Firmware · sensor logic · realtime Flutter integration",
      ],
      [
        "Engineering focus",
        "Validate signal quality and score fall patterns before display",
      ],
      [
        "Tool roles",
        "ESP32 for sensing · MQTT for telemetry · Flutter for response",
      ],
      ["Outcome", "Academic prototype · public firmware and app source"],
    ],
    flow: [
      { icon: "cpu", label: "Device", value: "ESP32 sensors" },
      { icon: "radio-tower", label: "Transport", value: "MQTT telemetry" },
      { icon: "smartphone", label: "Experience", value: "Flutter dashboard" },
    ],
    repository:
      "https://github.com/TienTrn05/Heart-Rate-Monitor-and-Fall-Detection-Device",
    repositoryLabel: "View GitHub",
    hasCaseStudy: true,
    visual: {
      type: "repository",
      theme: "bg-gradient-to-br from-slate-950 via-teal-900 to-emerald-600",
      label: "Academic project · public repository",
    },
  },
];
