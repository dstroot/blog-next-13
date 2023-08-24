// contentlayer.config.ts
import {
  defineDocumentType,
  defineNestedType,
  makeSource
} from "contentlayer/source-files";
import readingTime from "reading-time";
import RehypeCodeTitles from "rehype-code-titles";
import rehypeHighlight from "rehype-highlight";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
var Author = defineNestedType(() => ({
  name: "Author",
  fields: {
    name: {
      type: "string",
      required: true
    },
    picture: {
      type: "string",
      required: true
    }
  }
}));
var OGImage = defineNestedType(() => ({
  name: "OGImage",
  fields: {
    url: {
      type: "string"
    }
  }
}));
var Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `posts/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true
    },
    excerpt: {
      type: "string",
      description: "An excerpt of the post",
      required: true
    },
    coverImage: {
      type: "string",
      description: "path to post cover image",
      required: true
    },
    date: {
      type: "date",
      description: "The date of the post",
      required: true
    },
    published: {
      type: "boolean",
      description: "Published indicator",
      required: true
    },
    author: {
      type: "nested",
      of: Author,
      required: true
    },
    ogImage: {
      type: "nested",
      of: OGImage,
      required: false
    },
    seoURL: {
      type: "string",
      description: "SEO slug",
      required: false
    }
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => `/${doc._raw.flattenedPath}`
    },
    slugAsParams: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/")
    },
    stats: {
      type: "nested",
      resolve: (doc) => {
        const content = doc.body.raw;
        return readingTime(content);
      }
    }
  }
}));
var Snippet = defineDocumentType(() => ({
  name: "Snippet",
  filePathPattern: `snippets/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      description: "The title of the post",
      required: true
    },
    summary: {
      type: "string",
      description: "A summary of the snippet",
      required: true
    },
    icon: {
      type: "string",
      description: "name of the icon to use",
      required: true
    },
    date: {
      type: "date",
      description: "The date of the post",
      required: true
    },
    published: {
      type: "boolean",
      description: "Published indicator",
      required: true
    },
    tags: {
      type: "list",
      of: { type: "string" },
      description: "List of tags to describe the snippet"
    }
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => `/${doc._raw.flattenedPath}`
    },
    slugAsParams: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/")
    },
    stats: {
      type: "nested",
      resolve: (doc) => {
        const content = doc.body.raw;
        return readingTime(content);
      }
    }
  }
}));
var Page = defineDocumentType(() => ({
  name: "Page",
  filePathPattern: `pages/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
      description: "Page title"
    },
    description: {
      type: "string",
      description: "Page description"
    }
  },
  computedFields: {
    slug: {
      type: "string",
      resolve: (doc) => `/${doc._raw.flattenedPath}`
    },
    slugAsParams: {
      type: "string",
      resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/")
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "./content",
  documentTypes: [Post, Snippet, Page],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug, RehypeCodeTitles, rehypeHighlight]
  }
});
export {
  Page,
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-ADLRFCQZ.mjs.map
