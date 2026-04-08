export type StylePreset = {
  slug: string;
  label: string;
  description: string;
  thumbnailPath: string;
  thumbnailAlt: string;
  prompt: string;
};

export const stylePresets: StylePreset[] = [
  {
    slug: "storybook-3d",
    label: "Storybook 3D",
    description: "Soft cinematic lighting with polished 3D storybook detail.",
    thumbnailPath: "/storybook-example.png",
    thumbnailAlt: "Storybook 3D preset example",
    prompt:
      "Transform the uploaded image into a premium storybook-inspired 3D illustration. Preserve the original subject identity, pose, framing, major objects, and scene relationships. Add soft depth, warm cinematic lighting, tactile materials, and a polished animated-film finish.",
  },
  {
    slug: "anime-cel",
    label: "Anime Cel",
    description: "Clean cel shading with expressive color and crisp outlines.",
    thumbnailPath: "/anime-cel-example.png",
    thumbnailAlt: "Anime cel preset example",
    prompt:
      "Restyle the uploaded image as high-end anime cel art. Preserve the exact subject, pose, composition, outfit details, and background structure. Use clean linework, elegant cel shading, expressive color contrast, and polished studio-animation clarity.",
  },
  {
    slug: "clay-render",
    label: "Clay Render",
    description: "Handcrafted clay texture with sculpted forms and warm depth.",
    thumbnailPath: "/clay-render-example.png",
    thumbnailAlt: "Clay render preset example",
    prompt:
      "Turn the uploaded image into a handcrafted clay-render scene. Preserve identity, framing, silhouette, and important scene details. Use sculpted clay textures, soft rounded forms, subtle imperfections, and warm premium lighting.",
  },
  {
    slug: "pixart",
    label: "Pixart",
    description:
      "Bright, expressive family-animation styling with polished 3D charm.",
    thumbnailPath: "/pixart-example.png",
    thumbnailAlt: "Pixart preset example",
    prompt:
      "Transform the uploaded image into a premium family-animation-inspired 3D illustration. Preserve the original subject identity, expression, pose, framing, outfit details, and important background structure. Use expressive features, charming stylization, warm lighting, and polished animated-film rendering without changing the core composition.",
  },
  {
    slug: "voxel-block",
    label: "Voxel Block",
    description:
      "Chunky block-built styling with playful forms and pixel-crafted depth.",
    thumbnailPath: "/voxel-block-example.png",
    thumbnailAlt: "Voxel block preset example",
    prompt:
      "Transform the uploaded image into a premium voxel block-world illustration with cubic forms, pixel-crafted surfaces, simplified geometry, and bright game-like lighting. Preserve the subject identity, pose, framing, outfit details, and major scene structure while changing only the artistic style.",
  },
  {
    slug: "marble-sculpture",
    label: "Marble Sculpture",
    description:
      "Elegant carved-stone portraiture with refined texture and museum lighting.",
    thumbnailPath: "/marble-sculpture-example.png",
    thumbnailAlt: "Marble sculpture preset example",
    prompt:
      "Transform the uploaded image into a refined marble sculpture portrait. Preserve the original subject identity, pose, framing, and major scene relationships while translating the image into carved stone with elegant chiselled detail, subtle surface veining, soft museum-style lighting, and a premium gallery finish.",
  },
];

export function getStylePreset(slug: string) {
  return stylePresets.find((preset) => preset.slug === slug);
}
