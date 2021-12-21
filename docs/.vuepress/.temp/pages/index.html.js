export const data = {
  key: "v-8daa1a0e",
  path: "/",
  title: "",
  lang: "en-US",
  frontmatter: {},
  excerpt: "",
  headers: [
    {
      level: 2,
      title: "Features",
      slug: "features",
      children: [],
    },
    {
      level: 2,
      title: "Getting Started",
      slug: "getting-started",
      children: [],
    },
    {
      level: 2,
      title: "Guide",
      slug: "guide",
      children: [
        {
          level: 3,
          title: "Styling 🎨",
          slug: "styling-🎨",
          children: [],
        },
        {
          level: 3,
          title: "Backend",
          slug: "backend",
          children: [],
        },
        {
          level: 3,
          title: "Pages",
          slug: "pages",
          children: [],
        },
        {
          level: 3,
          title: "Data fetching",
          slug: "data-fetching",
          children: [],
        },
      ],
    },
    {
      level: 2,
      title: "Developers",
      slug: "developers",
      children: [
        {
          level: 3,
          title: "Boot the local instance",
          slug: "boot-the-local-instance",
          children: [],
        },
        {
          level: 3,
          title: "Tests",
          slug: "tests",
          children: [],
        },
        {
          level: 3,
          title: "Architecture",
          slug: "architecture",
          children: [],
        },
      ],
    },
    {
      level: 2,
      title: "Contributing",
      slug: "contributing",
      children: [],
    },
  ],
  filePathRelative: "README.md",
  git: {
    updatedTime: null,
    contributors: [],
  },
};

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data);
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data);
  });
}
