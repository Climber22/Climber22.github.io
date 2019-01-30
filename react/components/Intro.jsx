// React
import React from "react";

// components
import { Segment, Header, Image, Grid } from "semantic-ui-react";

// styles
import styles from "../../public/assets/css/main.css";

export default function Intro(props) {
  return (
    <Segment className={styles.segment} basic id="intro">
      <Header
        as="h2"
        textAlign="center"
        content="About me"
        className={styles.segmentTitle}
      />
      <Grid columns={2} verticalAlign="middle">
        <Grid.Column>
          <Image
            src="../../public/assets/images/avater.png"
            className={styles.image}
          />
        </Grid.Column>
        <Grid.Column>
          <p>
            サイトを訪問頂き、ありがとうございます。
            <br />
            初めまして、井早 匠平と申します。
            <br />
            中学3年の時に初めてプログラミングに触れるも、「つまらない」と挫折し、吉里吉里というソフトで高校ではゲームを作っていました。
            <br />
            大学からプログラミングを再開し、通算5社以上での業務経験を経て、今に至ります。
            <br />
            コーヒーが好きで、一人暮らしを始めたら美味しいコーヒーが飲める街に住みたいと思っています。
            <br />
            最近はJSを触ることが多いですが、以前はrubyをやっていました。インフラ、バックエンド、フロントエンド一通りできます。
            <br />
            ネイティブアプリは勉強中です。
            <br />
            就職を20年春に控え、現在はフリーランスエンジニアと会社経営に携わっています。
          </p>
        </Grid.Column>
      </Grid>
    </Segment>
  );
}
