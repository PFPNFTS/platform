import { OpenAPI } from "@stability/sdk";

import {
  Background,
  Button,
  ImageContainer,
  PickButton,
  Select,
  Textarea,
} from "~/Theme";

import { User } from "~/User";

import { request } from "./OpenAPI";

export function TextToImage() {
  const { user } = User.use();
  const apiKey = user?.apiKeys?.[0];

  const [imageURL, setImageURL] = useState<string | undefined>(undefined);
  const [generating, setGenerating] = useState<boolean>(false);
  const [engineId, setEngineId] = useState<string>(
    "stable-diffusion-xl-beta-v2-2-2"
  );

  const [positivePrompt, setPositivePrompt] = useState<string>("");
  const [negativePrompt, setNegativePrompt] = useState<string>("");
  const [style, setStyle] =
    useState<OpenAPI.TextToImageRequestBody["style_preset"]>("enhance");

  const generate = useCallback(async () => {
    if (!apiKey) return;

    setGenerating(true);

    const url = await request(
      apiKey.key,
      engineId,
      positivePrompt,
      negativePrompt,
      style
    );

    setGenerating(false);
    setImageURL(url);
  }, [apiKey, engineId, style, positivePrompt, negativePrompt]);

  return (
    <div className="h-screen w-screen">
      <Background title="Text-to-image" className="h-full w-full">
        <div className="flex">
          <div className="flex w-fit flex-col gap-3">
            <Textarea
              autoFocus
              color="positive"
              title="Positive prompt"
              placeholder="Description of what you want to generate"
              value={positivePrompt}
              onChange={setPositivePrompt}
            />
            <Textarea
              color="negative"
              title="Negative prompt"
              placeholder="What you want to avoid generating"
              value={negativePrompt}
              onChange={setNegativePrompt}
            />
            <Select
              title="Model"
              value={engineId}
              onChange={setEngineId}
              options={[
                {
                  label: "Stable Diffusion XL",
                  value: "stable-diffusion-xl-beta-v2-2-2",
                },
                {
                  label: "Stable Diffusion 1.5",
                  value: "stable-diffusion-v1-5",
                },
                {
                  label: "Stable Diffusion 2.1",
                  value: "stable-diffusion-v2-1",
                },
              ]}
            />
            <Select
              title="Style"
              value={style}
              onChange={(value) =>
                setStyle(
                  value as OpenAPI.TextToImageRequestBody["style_preset"]
                )
              }
              options={[
                { label: "Enhance", value: "enhance" },
                { label: "Anime", value: "anime" },
                { label: "Photographic", value: "photographic" },
                { label: "Digital Art", value: "digital-art" },
                { label: "Comic Book", value: "comic-book" },
                { label: "Fantasy Art", value: "fantasy-art" },
                { label: "Line Art", value: "line-art" },
                { label: "Analog Film", value: "analog-film" },
                { label: "Neon Punk", value: "neon-punk" },
                { label: "Isometric", value: "isometric" },
                { label: "Low Poly", value: "low-poly" },
                { label: "Origami", value: "origami" },
                { label: "Modeling Compound", value: "modeling-compound" },
                { label: "Cinematic", value: "cinematic" },
                { label: "3D Model", value: "3d-model" },
                { label: "Pixel Art", value: "pixel-art" },
                { label: "Tile Texture", value: "tile-texture" },
              ]}
            />
            <PickButton
              value="Advanced Settings"
              onClick={() => console.log("Clicked!")}
            />
            <Button
              variant="primary"
              disabled={generating || !positivePrompt || !apiKey}
              onClick={generate}
            >
              Generate
            </Button>
          </div>
          <div className="flex items-center justify-center md:w-[75%]">
            <ImageContainer title="Output image" src={imageURL} />
          </div>
        </div>
      </Background>
    </div>
  );
}