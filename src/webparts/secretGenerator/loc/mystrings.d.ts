declare interface ISecretGeneratorWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
  AppLocalEnvironmentSharePoint: string;
  AppLocalEnvironmentTeams: string;
  AppSharePointEnvironment: string;
  AppTeamsTabEnvironment: string;
}

declare module 'SecretGeneratorWebPartStrings' {
  const strings: ISecretGeneratorWebPartStrings;
  export = strings;
}
