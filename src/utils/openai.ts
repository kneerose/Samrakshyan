import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
  organization: "org-V9qJE1euB3wpuytDWE62GNQX",
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);
export const getDescriptionsList = async (value: string) => {
  return await openai
    .createCompletion({
      model: "text-davinci-003",
      prompt: value,
      temperature: 0.7,
      max_tokens: 160,
      top_p: 1.0,
      frequency_penalty: 0.5,
      presence_penalty: 0.0,
    })
    .then((completion) => {
      let descriptionsArray = [];
      completion.data.choices.map((value) => {
        descriptionsArray.push(value.text);
      });
      return descriptionsArray;
    });
};
export const getImage = async (value: string) => {
  const images = await openai.createImage({
    prompt: value,
    n: 2,
    size: "1024x1024",
  });
  return images.data.data[0].url;
};
