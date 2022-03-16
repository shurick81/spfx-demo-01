import * as React from 'react';
import styles from './SecretGenerator.module.scss';
import { ISecretGeneratorProps } from './ISecretGeneratorProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class SecretGenerator extends React.Component<ISecretGeneratorProps, {}> {
  public render(): React.ReactElement<ISecretGeneratorProps> {
    const {
      description,
      isDarkTheme,
      environmentMessage,
      hasTeamsContext,
      userDisplayName
    } = this.props;

    var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~!@#$%^&*()_+-=[]\\{}|;:\'",./?';
    var randomString = '';
    var length = 20;
    for ( var i = 0; i < length; i++ ) {
      randomString += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }
    return (
      <section className={`${styles.secretGenerator} ${hasTeamsContext ? styles.teams : ''}`}>
        <span className={`${ styles.welcome }`}>Your new secret is: ${ randomString }</span>
      </section>
    );
  }
}
