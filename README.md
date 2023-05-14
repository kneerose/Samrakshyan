# Samrakshyan

संरक्षण: An Endangered Birds Recognition Portal

Home to around 11,000 species of fauna, Nepal is a country rich in biodiversity. Among them about 900 species are birds. Due to various reasons like encroachment of their natural habitats, and rampage killing many of these species are facing the threat of extinction. Around 38 endangered birds in Nepal need conservation. The growing advancement in machine learning can support the preservation of those species and monitoring the status of birds in the ecosystem can assist researchers of Nepal’s biodiversity in planning different strategies for their preservation. We developed an endangered bird classification system to identify bird calls from the audio data set collected from Xeno-canto.org. This was achieved by extracting the spectral characteristics of the audio signal through Mel-Spectrogram and MFCC (Mel-Frequency Cepstral Coefficients) which generated the spectrogram. It was fed into the deep learning model architecture like efficientNet which is based on a convolutional neural network. A genetic algorithm was used for hyper-parameter optimization. Our best results showed an F1-Score of 79\% for 41 species of birds. This has significant implications for the field of biodiversity conservation, as it allows researchers to monitor and protect threatened and endangered species.

## Runtime Environment Variables

Please refer to the [.env.example](.env.example) file for updated environment variables

-   BASE_DEPLOY_PATH## Runtime Environment Variables

Please refer to the [.env.example](.env.example) file for updated environment variables

-   DB_URL (database url for fetching birds details)
-   API_URL (api url for prediction)

### Project Setup and Scripts

1. If you are using `nvm`, install node version `16 LTS` and run `nvm alias default 16` to set the default node environment or run `nvm use` to use the version from [.nvmrc](.nvmrc)](.nvmrc). Else, use node version `16`.
2. Run `yarn install` in the terminal to set up the project and husky configuration.
3. Run `yarn dev` to start the project locally.
4. Run `yarn build` and `yarn start` to start production build.
5. Run `yarn clean` to clear cache, node_modules, and build folders.
6. `(Optional) Should be done automatically during the package installation process (i.e. npm install)` Run `yarn prepare` to install and initialize husky for commit hooks

### Development

For the development of the project, please refer to the [DEVELOPERS GUIDE](DEVELOPERS_GUIDE.md) documentation.

# Output

## Home Page

![homepage](https://user-images.githubusercontent.com/49801844/219280103-6bf4b7a2-dfab-43b0-a08f-7af57db57a00.jpg)

## Prediction

![prediction_page](https://user-images.githubusercontent.com/49801844/219280255-b43cc603-0acc-46b5-a823-c12bc22d82c2.jpg)

## Bird Details

![bird_detail_page](https://user-images.githubusercontent.com/49801844/219280294-0fabaad8-b420-4140-89b8-b73b5df9ce89.png)
22d82c2.jpg)
