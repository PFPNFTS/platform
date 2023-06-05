/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */


/** WithRequired type helpers */
type WithRequired<T, K extends keyof T> = T & { [P in K]-?: T[P] };

export interface paths {
  "/generation/{engine_id}/text-to-image": {
    /**
     * text-to-image 
     * @description Generate a new image from a text prompt
     */
    post: operations["textToImage"];
  };
  "/generation/{engine_id}/image-to-image": {
    /**
     * image-to-image 
     * @description Modify an image based on a text prompt
     */
    post: operations["imageToImage"];
  };
  "/generation/{engine_id}/image-to-image/upscale": {
    /**
     * image-to-image/upscale 
     * @description Create a higher resolution version of an input image.
     * 
     * This operation outputs an image with a maximum pixel count of **4,194,304**. This is equivalent to dimensions such as `2048x2048` and `4096x1024`.
     * 
     * By default, the input image will be upscaled by a factor of 2.  For additional control over the output dimensions, a `width` or `height` parameter may be specified.
     * 
     * For upscaler engines that are ESRGAN-based, refer to the `RealESRGANUpscaleRequestBody` body option below. For upscaler engines that are Stable Diffusion Latent Upscaler-based, refer to the `LatentUpscalerUpscaleRequestBody` body option below.
     * 
     * For more details on the upscaler engines, refer to the [documentation on the Platform site.](https://platform.stability.ai/docs/features/image-upscaling?tab=python)
     */
    post: operations["upscaleImage"];
  };
  "/generation/{engine_id}/image-to-image/masking": {
    /**
     * image-to-image/masking 
     * @description Selectively modify portions of an image using a mask
     */
    post: operations["masking"];
  };
  "/engines/list": {
    /**
     * list 
     * @description List all engines available to your organization/user
     */
    get: operations["listEngines"];
  };
  "/user/account": {
    /**
     * account 
     * @description Get information about the account associated with the provided API key
     */
    get: operations["userAccount"];
  };
  "/user/balance": {
    /**
     * balance 
     * @description Get the credit balance of the account/organization associated with the API key
     */
    get: operations["userBalance"];
  };
}

export type webhooks = Record<string, never>;

export interface components {
  schemas: {
    Engine: {
      description: string;
      /**
       * @description Unique identifier for the engine 
       * @example stable-diffusion-v1-5
       */
      id: string;
      /**
       * @description Name of the engine 
       * @example Stable Diffusion v1.5
       */
      name: string;
      /**
       * @description The type of content this engine produces 
       * @example PICTURE 
       * @enum {string}
       */
      type: "AUDIO" | "CLASSIFICATION" | "PICTURE" | "STORAGE" | "TEXT" | "VIDEO";
    };
    Error: {
      /**
       * @description A unique identifier for this particular occurrence of the problem. 
       * @example 296a972f-666a-44a1-a3df-c9c28a1f56c0
       */
      id: string;
      /**
       * @description The short-name of this class of errors e.g. `bad_request`. 
       * @example bad_request
       */
      name: string;
      /**
       * @description A human-readable explanation specific to this occurrence of the problem. 
       * @example Header parameter Authorization is required, but not found
       */
      message: string;
    };
    /**
     * @description How strictly the diffusion process adheres to the prompt text (higher values keep your image closer to your prompt) 
     * @default 7 
     * @example 7
     */
    CfgScale: number;
    /**
     * @default NONE 
     * @example FAST_BLUE 
     * @enum {string}
     */
    ClipGuidancePreset: "FAST_BLUE" | "FAST_GREEN" | "NONE" | "SIMPLE" | "SLOW" | "SLOWER" | "SLOWEST";
    /** @description Desired height of the output image.  Only one of `width` or `height` may be specified. */
    UpscaleImageHeight: number;
    /** @description Desired width of the output image.  Only one of `width` or `height` may be specified. */
    UpscaleImageWidth: number;
    /**
     * @description Height of the image in pixels.  Must be in increments of 64 and pass the following validation:
     * - For 768 engines: <span style='display: flex; justify-content: flex-start; gap:8px'>589,824 <span>≤</span> `height * width` <span>≤</span> 1,048,576</span>
     * - All other engines: <span style='display: flex; justify-content: flex-start; gap:8px'>262,144 <span>≤</span> `height * width` <span>≤</span> 1,048,576</span> 
     * @default 512 
     * @example 512
     */
    DiffuseImageHeight: number;
    /**
     * @description Width of the image in pixels.  Must be in increments of 64 and pass the following validation:
     * - For 768 engines: <span style='display: flex; justify-content: flex-start; gap:8px'>589,824 <span>≤</span> `height * width` <span>≤</span> 1,048,576</span>
     * - All other engines: <span style='display: flex; justify-content: flex-start; gap:8px'>262,144 <span>≤</span> `height * width` <span>≤</span> 1,048,576</span> 
     * @default 512 
     * @example 512
     */
    DiffuseImageWidth: number;
    /**
     * @description Which sampler to use for the diffusion process. If this value is omitted we'll automatically select an appropriate sampler for you. 
     * @example K_DPM_2_ANCESTRAL 
     * @enum {string}
     */
    Sampler: "DDIM" | "DDPM" | "K_DPMPP_2M" | "K_DPMPP_2S_ANCESTRAL" | "K_DPM_2" | "K_DPM_2_ANCESTRAL" | "K_EULER" | "K_EULER_ANCESTRAL" | "K_HEUN" | "K_LMS";
    /**
     * @description Number of images to generate 
     * @default 1 
     * @example 1
     */
    Samples: number;
    /**
     * @description Random noise seed (omit this option or use `0` for a random seed) 
     * @default 0 
     * @example 0
     */
    Seed: number;
    /**
     * @description Number of diffusion steps to run 
     * @default 50 
     * @example 75
     */
    Steps: number;
    /**
     * @description Extra parameters passed to the engine.
     * These parameters are used for in-development or experimental features and may change
     * without warning, so please use with caution.
     */
    Extras: Record<string, never>;
    /**
     * @description Pass in a style preset to guide the image model towards a particular style.
     * This list of style presets is subject to change. 
     * @enum {string}
     */
    StylePreset: "enhance" | "anime" | "photographic" | "digital-art" | "comic-book" | "fantasy-art" | "line-art" | "analog-film" | "neon-punk" | "isometric" | "low-poly" | "origami" | "modeling-compound" | "cinematic" | "3d-model" | "pixel-art" | "tile-texture";
    /** @description Text prompt for image generation */
    TextPrompt: {
      /**
       * @description The prompt itself 
       * @example A lighthouse on a cliff
       */
      text: string;
      /**
       * Format: float 
       * @description Weight of the prompt (use negative numbers for negative prompts) 
       * @example 0.8167237
       */
      weight?: number;
    };
    /**
     * TextPrompts 
     * @description An array of text prompts to use for generation.
     * 
     * Given a text prompt with the text `A lighthouse on a cliff` and a weight of `0.5`, it would be represented as:
     * 
     * <pre>
     * "text_prompts": [
     *   {
     *     "text": "A lighthouse on a cliff",
     *     "weight": 0.5
     *   }
     * ]
     * </pre>
     */
    TextPromptsForTextToImage: (components["schemas"]["TextPrompt"])[];
    /**
     * @description An array of text prompts to use for generation.
     * 
     * Due to how arrays are represented in `multipart/form-data` requests, prompts must adhere to the format `text_prompts[index][text|weight]`,
     * where `index` is some integer used to tie the text and weight together.  While `index` does not have to be sequential, duplicate entries 
     * will override previous entries, so it is recommended to use sequential indices.
     * 
     * Given a text prompt with the text `A lighthouse on a cliff` and a weight of `0.5`, it would be represented as:
     * ```
     * text_prompts[0][text]: "A lighthouse on a cliff"
     * text_prompts[0][weight]: 0.5
     * ```
     * 
     * To add another prompt to that request simply provide the values under a new `index`:
     * 
     * ```
     * text_prompts[0][text]: "A lighthouse on a cliff"
     * text_prompts[0][weight]: 0.5
     * text_prompts[1][text]: "land, ground, dirt, grass"
     * text_prompts[1][weight]: -0.9
     * ```
     */
    TextPrompts: (components["schemas"]["TextPrompt"])[];
    /**
     * Format: binary 
     * @example <image binary>
     */
    InputImage: string;
    /**
     * Format: binary 
     * @description Image used to initialize the diffusion process, in lieu of random noise. 
     * @example <image binary>
     */
    InitImage: string;
    /**
     * Format: float 
     * @description How much influence the `init_image` has on the diffusion process. Values close to `1` will yield images very similar to the `init_image` while values close to `0` will yield images wildly different than the `init_image`. The behavior of this is meant to mirror DreamStudio's "Image Strength" slider.  <br/> <br/> This parameter is just an alternate way to set `step_schedule_start`, which is done via the calculation `1 - image_strength`. For example, passing in an Image Strength of 35% (`0.35`) would result in a `step_schedule_start` of `0.65`.
     *  
     * @default 0.35 
     * @example 0.4
     */
    InitImageStrength: number;
    /**
     * @description Whether to use `image_strength` or `step_schedule_*` to control how much influence the `init_image` has on the result. 
     * @default IMAGE_STRENGTH 
     * @enum {string}
     */
    InitImageMode: "IMAGE_STRENGTH" | "STEP_SCHEDULE";
    /**
     * @description Skips a proportion of the start of the diffusion steps, allowing the init_image to influence the final generated image.  Lower values will result in more influence from the init_image, while higher values will result in more influence from the diffusion steps.  (e.g. a value of `0` would simply return you the init_image, where a value of `1` would return you a completely different image.) 
     * @default 0.65 
     * @example 0.4
     */
    StepScheduleStart: number;
    /**
     * @description Skips a proportion of the end of the diffusion steps, allowing the init_image to influence the final generated image.  Lower values will result in more influence from the init_image, while higher values will result in more influence from the diffusion steps. 
     * @example 0.01
     */
    StepScheduleEnd: number;
    /**
     * Format: binary 
     * @description Optional grayscale mask that allows for influence over which pixels are eligible for diffusion and at what strength. Must be the same dimensions as the `init_image`. Use the `mask_source` option to specify whether the white or black pixels should be inpainted. 
     * @example <image binary>
     */
    MaskImage: string;
    /**
     * @description For any given pixel, the mask determines the strength of generation on a linear scale.  This parameter determines where to source the mask from:
     * - `MASK_IMAGE_WHITE` will use the white pixels of the mask_image as the mask, where white pixels are completely replaced and black pixels are unchanged
     * - `MASK_IMAGE_BLACK` will use the black pixels of the mask_image as the mask, where black pixels are completely replaced and white pixels are unchanged
     * - `INIT_IMAGE_ALPHA` will use the alpha channel of the init_image as the mask, where fully transparent pixels are completely replaced and fully opaque pixels are unchanged
     */
    MaskSource: string;
    /** @description Represents the optional parameters that can be passed to any generation request. */
    GenerationRequestOptionalParams: {
      cfg_scale?: components["schemas"]["CfgScale"];
      clip_guidance_preset?: components["schemas"]["ClipGuidancePreset"];
      sampler?: components["schemas"]["Sampler"];
      samples?: components["schemas"]["Samples"];
      seed?: components["schemas"]["Seed"];
      steps?: components["schemas"]["Steps"];
      style_preset?: components["schemas"]["StylePreset"];
      extras?: components["schemas"]["Extras"];
    };
    RealESRGANUpscaleRequestBody: {
      image: components["schemas"]["InputImage"];
      width?: components["schemas"]["UpscaleImageWidth"];
      height?: components["schemas"]["UpscaleImageHeight"];
    };
    LatentUpscalerUpscaleRequestBody: {
      image: components["schemas"]["InputImage"];
      width?: components["schemas"]["UpscaleImageWidth"];
      height?: components["schemas"]["UpscaleImageHeight"];
      text_prompts?: components["schemas"]["TextPrompts"];
      seed?: components["schemas"]["Seed"];
      steps?: components["schemas"]["Steps"];
      cfg_scale?: components["schemas"]["CfgScale"];
    };
    ImageToImageRequestBody: {
      text_prompts: components["schemas"]["TextPrompts"];
      init_image: components["schemas"]["InitImage"];
      init_image_mode?: components["schemas"]["InitImageMode"];
      image_strength?: components["schemas"]["InitImageStrength"];
      step_schedule_start?: components["schemas"]["StepScheduleStart"];
      step_schedule_end?: components["schemas"]["StepScheduleEnd"];
      cfg_scale?: components["schemas"]["CfgScale"];
      clip_guidance_preset?: components["schemas"]["ClipGuidancePreset"];
      sampler?: components["schemas"]["Sampler"];
      samples?: components["schemas"]["Samples"];
      seed?: components["schemas"]["Seed"];
      steps?: components["schemas"]["Steps"];
      style_preset?: components["schemas"]["StylePreset"];
      extras?: components["schemas"]["Extras"];
    };
    ImageToImageUsingImageStrengthRequestBody: {
      text_prompts: components["schemas"]["TextPrompts"];
      init_image: components["schemas"]["InitImage"];
      init_image_mode?: components["schemas"]["InitImageMode"];
      image_strength?: components["schemas"]["InitImageStrength"];
    } & components["schemas"]["GenerationRequestOptionalParams"];
    ImageToImageUsingStepScheduleRequestBody: {
      text_prompts: components["schemas"]["TextPrompts"];
      init_image: components["schemas"]["InitImage"];
      init_image_mode?: components["schemas"]["InitImageMode"];
      step_schedule_start?: components["schemas"]["StepScheduleStart"];
      step_schedule_end?: components["schemas"]["StepScheduleEnd"];
    } & components["schemas"]["GenerationRequestOptionalParams"];
    MaskingRequestBody: {
      init_image: components["schemas"]["InitImage"];
      mask_source: components["schemas"]["MaskSource"];
      mask_image?: components["schemas"]["MaskImage"];
      text_prompts: components["schemas"]["TextPrompts"];
      cfg_scale?: components["schemas"]["CfgScale"];
      clip_guidance_preset?: components["schemas"]["ClipGuidancePreset"];
      sampler?: components["schemas"]["Sampler"];
      samples?: components["schemas"]["Samples"];
      seed?: components["schemas"]["Seed"];
      steps?: components["schemas"]["Steps"];
      style_preset?: components["schemas"]["StylePreset"];
      extras?: components["schemas"]["Extras"];
    };
    MaskingUsingMaskImageRequestBody: {
      text_prompts: components["schemas"]["TextPrompts"];
      init_image: components["schemas"]["InitImage"];
      mask_source: components["schemas"]["MaskSource"];
      mask_image: components["schemas"]["MaskImage"];
    } & components["schemas"]["GenerationRequestOptionalParams"];
    MaskingUsingInitImageAlphaRequestBody: {
      text_prompts: components["schemas"]["TextPrompts"];
      init_image: components["schemas"]["InitImage"];
      mask_source: components["schemas"]["MaskSource"];
    } & components["schemas"]["GenerationRequestOptionalParams"];
    /**
     * @example {
     *   "cfg_scale": 7,
     *   "clip_guidance_preset": "FAST_BLUE",
     *   "height": 512,
     *   "sampler": "K_DPM_2_ANCESTRAL",
     *   "samples": 1,
     *   "seed": 0,
     *   "steps": 75,
     *   "text_prompts": [
     *     {
     *       "text": "A lighthouse on a cliff",
     *       "weight": 1
     *     }
     *   ],
     *   "width": 512
     * }
     */
    TextToImageRequestBody: WithRequired<{
      height?: components["schemas"]["DiffuseImageHeight"];
      width?: components["schemas"]["DiffuseImageWidth"];
      text_prompts: components["schemas"]["TextPromptsForTextToImage"];
    } & components["schemas"]["GenerationRequestOptionalParams"], "text_prompts">;
    AccountResponseBody: {
      /**
       * Format: email 
       * @description The user's email 
       * @example example@stability.ai
       */
      email: string;
      /**
       * @description The user's ID 
       * @example user-1234
       */
      id: string;
      /**
       * @description The user's organizations 
       * @example [
       *   {
       *     "id": "org-5678",
       *     "name": "Another Organization",
       *     "role": "MEMBER",
       *     "is_default": true
       *   },
       *   {
       *     "id": "org-1234",
       *     "name": "My Organization",
       *     "role": "MEMBER",
       *     "is_default": false
       *   }
       * ]
       */
      organizations: (components["schemas"]["OrganizationMembership"])[];
      /**
       * Format: uri 
       * @description The user's profile picture 
       * @example https://api.stability.ai/example.png
       */
      profile_picture?: string;
    };
    /**
     * @example {
     *   "credits": 0.07903292496944721
     * }
     */
    BalanceResponseBody: {
      /**
       * Format: double 
       * @description The balance of the account/organization associated with the API key 
       * @example 0.41122252265928866
       */
      credits: number;
    };
    /**
     * @description The engines available to your user/organization 
     * @example [
     *   {
     *     "description": "Stability-AI Stable Diffusion XL Beta v2.2.2",
     *     "id": "stable-diffusion-xl-beta-v2-2-2",
     *     "name": "Stable Diffusion v2.2.2-XL Beta",
     *     "type": "PICTURE"
     *   },
     *   {
     *     "description": "Stability-AI Stable Diffusion v1.5",
     *     "id": "stable-diffusion-v1-5",
     *     "name": "Stable Diffusion v1.5",
     *     "type": "PICTURE"
     *   },
     *   {
     *     "description": "Stability-AI Stable Diffusion v2.1",
     *     "id": "stable-diffusion-512-v2-1",
     *     "name": "Stable Diffusion v2.1",
     *     "type": "PICTURE"
     *   },
     *   {
     *     "description": "Stability-AI Stable Diffusion 768 v2.1",
     *     "id": "stable-diffusion-768-v2-1",
     *     "name": "Stable Diffusion v2.1-768",
     *     "type": "PICTURE"
     *   }
     * ]
     */
    ListEnginesResponseBody: (components["schemas"]["Engine"])[];
    /**
     * @description The result of the generation process.
     * - `SUCCESS` indicates success
     * - `ERROR` indicates an error
     * - `CONTENT_FILTERED` indicates the result affected by the content filter and may be blurred.
     * 
     * This header is only present when the `Accept` is set to `image/png`.  Otherwise it is returned in the response body. 
     * @enum {string}
     */
    FinishReason: "SUCCESS" | "ERROR" | "CONTENT_FILTERED";
    /**
     * @example [
     *   {
     *     "base64": "...very long string...",
     *     "finishReason": "SUCCESS",
     *     "seed": 1050625087
     *   },
     *   {
     *     "base64": "...very long string...",
     *     "finishReason": "CONTENT_FILTERED",
     *     "seed": 1229191277
     *   }
     * ]
     */
    Image: {
      /**
       * @description Image encoded in base64 
       * @example Sed corporis modi et.
       */
      base64?: string;
      /**
       * @example CONTENT_FILTERED 
       * @enum {string}
       */
      finishReason?: "SUCCESS" | "ERROR" | "CONTENT_FILTERED";
      /**
       * @description The seed associated with this image 
       * @example 1229191277
       */
      seed?: number;
    };
    OrganizationMembership: {
      /** @example org-123456 */
      id: string;
      /** @example false */
      is_default: boolean;
      /** @example My Organization */
      name: string;
      /** @example MEMBER */
      role: string;
    };
  };
  responses: {
    /** @description unauthorized: API key missing or invalid */
    401: {
      content: {
        "application/json": components["schemas"]["Error"];
      };
    };
    /** @description permission_denied: You lack the necessary permissions to perform this action */
    403: {
      content: {
        "application/json": components["schemas"]["Error"];
      };
    };
    /** @description not_found: The requested resource was not found (e.g. specifing a model that does not exist) */
    404: {
      content: {
        "application/json": components["schemas"]["Error"];
      };
    };
    /** @description server_error: Some unexpected server error occurred */
    500: {
      content: {
        "application/json": components["schemas"]["Error"];
      };
    };
    /**
     * @description bad_request: general error for invalid parameters <br/><br/>
     * 
     * <p style="display: flex; margin-top: -20px; margin-bottom: 0">More specific errors:</p>
     * 
     *   - invalid_samples: Sample count may only be greater than 1 when the accept header is set to `application/json`
     *   - invalid_height_or_width: Height and width must be specified in increments of 64
     *   - invalid_file_size: The file size of one or more of the provided files is invalid
     *   - invalid_mime_type: The mime type of one or more of the provided files is invalid
     *   - invalid_image_dimensions: The dimensions of the provided `init_image` and `mask_image` do not match
     *   - invalid_mask_image: The parameter `mask_source` was set to `MASK_IMAGE_WHITE` or `MASK_IMAGE_BLACK` but no `mask_image` was provided
     *   - invalid_prompts: One or more of the prompts contains filtered words
     *   - invalid_pixel_count: Incorrect number of pixels specified. Requirements:
     *     - For 768 engines: 589,824 ≤ `height * width` ≤ 1,048,576
     *     - All other non-SDXL engines: 262,144 ≤ `height * width` ≤ 1,048,576
     *   - invalid_sdxl_v222_dimensions: Incorrect dimensions specified for SDXL v2-2-2 engine. Requirements:
     *     - Neither `height` nor `width` may be below 128
     *     - Only one of `height` or `width` may be above 512 (e.g. 512x768 is valid but 578x768 is not)
     *     - Maximum dimensions supported are 512x896 or 896x512
     */
    "400FromGeneration": {
      content: {
        "application/json": components["schemas"]["Error"];
      };
    };
    /**
     * @description bad_request: general error for invalid parameters <br/><br/>
     * 
     * <p style="display: flex; margin-top: -20px; margin-bottom: 0">More specific errors:</p>
     * 
     *   - invalid_file_size: The file size of one or more of the provided files is invalid
     *   - invalid_mime_type: The mime type of one or more of the provided files is invalid
     *   - invalid_pixel_count: The requested image would exceed the maximum pixel count of 4,194,304
     */
    "400FromUpscale": {
      content: {
        "application/json": components["schemas"]["Error"];
      };
    };
  };
  parameters: {
    upscaleEngineID: string;
    /** @example stable-diffusion-v1-5 */
    engineID: string;
    /**
     * @description Allows for requests to be scoped to an organization other than the user's default.  If not provided, the user's default organization will be used. 
     * @example org-123456
     */
    organization?: string;
    /**
     * @description Used to identify the source of requests, such as the client application or sub-organization. Optional, but recommended for organizational clarity. 
     * @example my-great-plugin
     */
    stabilityClientID?: string;
    /**
     * @description Used to identify the version of the application or service making the requests. Optional, but recommended for organizational clarity. 
     * @example 1.2.1
     */
    stabilityClientVersion?: string;
    /** @description The format of the response.  Leave blank for JSON, or set to 'image/png' for a PNG image. */
    accept?: "application/json" | "image/png";
  };
  requestBodies: never;
  headers: {
    "Content-Length": number;
    "Content-Type": "application/json" | "image/png";
    "Finish-Reason": components["schemas"]["FinishReason"];
    /**
     * @description The seed used to generate the image.  This header is only present when the `Accept` is set to `image/png`.  Otherwise it is returned in the response body. 
     * @example 3817857576
     */
    Seed: number;
  };
  pathItems: never;
}

export type external = Record<string, never>;

export interface operations {

  /**
   * text-to-image 
   * @description Generate a new image from a text prompt
   */
  textToImage: {
    parameters: {
      header?: {
        Accept?: components["parameters"]["accept"];
        Organization?: components["parameters"]["organization"];
        "Stability-Client-ID"?: components["parameters"]["stabilityClientID"];
        "Stability-Client-Version"?: components["parameters"]["stabilityClientVersion"];
      };
      path: {
        engine_id: components["parameters"]["engineID"];
      };
    };
    requestBody: {
      content: {
        /**
         * @example {
         *   "cfg_scale": 7,
         *   "clip_guidance_preset": "FAST_BLUE",
         *   "height": 512,
         *   "width": 512,
         *   "sampler": "K_DPM_2_ANCESTRAL",
         *   "samples": 1,
         *   "steps": 75,
         *   "text_prompts": [
         *     {
         *       "text": "A lighthouse on a cliff",
         *       "weight": 1
         *     }
         *   ]
         * }
         */
        "application/json": components["schemas"]["TextToImageRequestBody"];
      };
    };
    responses: {
      /** @description OK response. */
      200: {
        headers: {
          "Content-Length": components["headers"]["Content-Length"];
          "Content-Type": components["headers"]["Content-Type"];
          "Finish-Reason": components["headers"]["Finish-Reason"];
          Seed: components["headers"]["Seed"];
        };
        content: {
          "application/json": (components["schemas"]["Image"])[];
          "image/png": string;
        };
      };
      400: components["responses"]["400FromGeneration"];
      401: components["responses"]["401"];
      403: components["responses"]["403"];
      404: components["responses"]["404"];
      500: components["responses"]["500"];
    };
  };
  /**
   * image-to-image 
   * @description Modify an image based on a text prompt
   */
  imageToImage: {
    parameters: {
      header?: {
        Accept?: components["parameters"]["accept"];
        Organization?: components["parameters"]["organization"];
        "Stability-Client-ID"?: components["parameters"]["stabilityClientID"];
        "Stability-Client-Version"?: components["parameters"]["stabilityClientVersion"];
      };
      path: {
        engine_id: components["parameters"]["engineID"];
      };
    };
    requestBody: {
      content: {
        "multipart/form-data": components["schemas"]["ImageToImageRequestBody"];
      };
    };
    responses: {
      /** @description OK response. */
      200: {
        headers: {
          "Content-Length": components["headers"]["Content-Length"];
          "Content-Type": components["headers"]["Content-Type"];
          "Finish-Reason": components["headers"]["Finish-Reason"];
          Seed: components["headers"]["Seed"];
        };
        content: {
          "application/json": (components["schemas"]["Image"])[];
          "image/png": string;
        };
      };
      400: components["responses"]["400FromGeneration"];
      401: components["responses"]["401"];
      403: components["responses"]["403"];
      404: components["responses"]["404"];
      500: components["responses"]["500"];
    };
  };
  /**
   * image-to-image/upscale 
   * @description Create a higher resolution version of an input image.
   * 
   * This operation outputs an image with a maximum pixel count of **4,194,304**. This is equivalent to dimensions such as `2048x2048` and `4096x1024`.
   * 
   * By default, the input image will be upscaled by a factor of 2.  For additional control over the output dimensions, a `width` or `height` parameter may be specified.
   * 
   * For upscaler engines that are ESRGAN-based, refer to the `RealESRGANUpscaleRequestBody` body option below. For upscaler engines that are Stable Diffusion Latent Upscaler-based, refer to the `LatentUpscalerUpscaleRequestBody` body option below.
   * 
   * For more details on the upscaler engines, refer to the [documentation on the Platform site.](https://platform.stability.ai/docs/features/image-upscaling?tab=python)
   */
  upscaleImage: {
    parameters: {
      header?: {
        Accept?: components["parameters"]["accept"];
        Organization?: components["parameters"]["organization"];
        "Stability-Client-ID"?: components["parameters"]["stabilityClientID"];
        "Stability-Client-Version"?: components["parameters"]["stabilityClientVersion"];
      };
      path: {
        engine_id: components["parameters"]["upscaleEngineID"];
      };
    };
    requestBody: {
      content: {
        "multipart/form-data": components["schemas"]["RealESRGANUpscaleRequestBody"] | components["schemas"]["LatentUpscalerUpscaleRequestBody"];
      };
    };
    responses: {
      /** @description OK response. */
      200: {
        headers: {
          "Content-Length": components["headers"]["Content-Length"];
          "Content-Type": components["headers"]["Content-Type"];
          "Finish-Reason": components["headers"]["Finish-Reason"];
          Seed: components["headers"]["Seed"];
        };
        content: {
          "application/json": (components["schemas"]["Image"])[];
          "image/png": string;
        };
      };
      400: components["responses"]["400FromUpscale"];
      401: components["responses"]["401"];
      403: components["responses"]["403"];
      404: components["responses"]["404"];
      500: components["responses"]["500"];
    };
  };
  /**
   * image-to-image/masking 
   * @description Selectively modify portions of an image using a mask
   */
  masking: {
    parameters: {
      header?: {
        Accept?: components["parameters"]["accept"];
        Organization?: components["parameters"]["organization"];
        "Stability-Client-ID"?: components["parameters"]["stabilityClientID"];
        "Stability-Client-Version"?: components["parameters"]["stabilityClientVersion"];
      };
      path: {
        /** @example stable-inpainting-512-v2-0 */
        engine_id: string;
      };
    };
    requestBody: {
      content: {
        "multipart/form-data": components["schemas"]["MaskingRequestBody"];
      };
    };
    responses: {
      /** @description OK response. */
      200: {
        headers: {
          "Content-Length": components["headers"]["Content-Length"];
          "Content-Type": components["headers"]["Content-Type"];
          "Finish-Reason": components["headers"]["Finish-Reason"];
          Seed: components["headers"]["Seed"];
        };
        content: {
          "application/json": (components["schemas"]["Image"])[];
          "image/png": string;
        };
      };
      400: components["responses"]["400FromGeneration"];
      401: components["responses"]["401"];
      403: components["responses"]["403"];
      404: components["responses"]["404"];
      500: components["responses"]["500"];
    };
  };
  /**
   * list 
   * @description List all engines available to your organization/user
   */
  listEngines: {
    parameters: {
      header?: {
        Organization?: components["parameters"]["organization"];
        "Stability-Client-ID"?: components["parameters"]["stabilityClientID"];
        "Stability-Client-Version"?: components["parameters"]["stabilityClientVersion"];
      };
    };
    responses: {
      /** @description OK response. */
      200: {
        content: {
          "application/json": components["schemas"]["ListEnginesResponseBody"];
        };
      };
      401: components["responses"]["401"];
      500: components["responses"]["500"];
    };
  };
  /**
   * account 
   * @description Get information about the account associated with the provided API key
   */
  userAccount: {
    responses: {
      /** @description OK response. */
      200: {
        content: {
          "application/json": components["schemas"]["AccountResponseBody"];
        };
      };
      401: components["responses"]["401"];
      500: components["responses"]["500"];
    };
  };
  /**
   * balance 
   * @description Get the credit balance of the account/organization associated with the API key
   */
  userBalance: {
    parameters: {
      header?: {
        Organization?: components["parameters"]["organization"];
        "Stability-Client-ID"?: components["parameters"]["stabilityClientID"];
        "Stability-Client-Version"?: components["parameters"]["stabilityClientVersion"];
      };
    };
    responses: {
      /** @description OK response. */
      200: {
        content: {
          "application/json": components["schemas"]["BalanceResponseBody"];
        };
      };
      401: components["responses"]["401"];
      500: components["responses"]["500"];
    };
  };
}