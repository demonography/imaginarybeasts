import { defineCollection } from "astro:content";
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const illustrationCollection = defineCollection({
    //type: 'content',
    loader: glob({ base: './src/content/illustration', pattern: '**/*.{md,mdx}' }),
    schema: z.object({
      title: z.string().nullish(),
      description: z.string().nullish(),
      image: z.object({
        url: z.string().nullish(),
        alt: z.string().nullish()
      }),
      worksImage1: z.object({
        url: z.string().nullish(),
        alt: z.string().nullish()
      }),
      worksImage1caption: z.string().nullish(),
      worksImage2: z.object({
        url: z.string().nullish(),
        alt: z.string().nullish()
      }),
      worksImage2caption: z.string().nullish(),
      worksImage3: z.object({
        url: z.string().nullish(),
        alt: z.string().nullish()
      }),
      worksImage3caption: z.string().nullish(),
      worksImage4: z.object({
        url: z.string().nullish(),
        alt: z.string().nullish()
      }),
      worksImage4caption: z.string().nullish(),
      link: z.string(),
    })
});

export const collections = {illustrationCollection};

// const arttoberCollection = defineCollection({
//     //type: 'content',
//     loader: glob({ base: './src/content/arttober', pattern: '**/*.{md,mdx}' }),
//     schema: z.object({
//       title: z.string(),
//       description: z.string(),
//       image: z.object({
//         url: z.string(),
//         alt: z.string()
//       }),
//       worksImage1: z.object({
//         url: z.string(),
//         alt: z.string()
//       }),
//       worksImage2: z.object({
//         url: z.string(),
//         alt: z.string()
//       }),
//       worksImage3: z.object({
//         url: z.string(),
//         alt: z.string()
//       }),
//     })
// });

// export const arttobercollections = {arttoberCollection};


