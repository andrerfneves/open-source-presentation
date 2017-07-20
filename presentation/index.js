// Presentation Entry Point
import React, { Component } from "react";
import { BlockQuote, Cite, Deck, Heading,
  ListItem, List, Quote, Slide, Text, Image } from "spectacle";
import preloader from "spectacle/lib/utils/preloader";
import imageAssets from "./images";
import { theme } from "./theme";

// Require CSS Styles
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

// Preload all Image Assets
preloader(imageAssets);

export default class Presentation extends Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
      >
        {/* Slide 1 */}
        <Slide transition={["zoom"]} bgColor="tertiary">
          <Heading
            size={1}
            fit
            caps
            lineHeight={1}
            textColor="primary"
          >
            State of Open Source
          </Heading>
          <Text margin="10px 0 0" textColor="secondary" size={3} bold>
            by André Neves
          </Text>

        </Slide>
        {/* End Slide 1 */}

        {/* Slide 2 */}
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading
            size={6}
            textColor="primary"
            caps
          >
            Table of Content
          </Heading>
          <List margin="30px 0 0" textColor="primary">
            <ListItem margin="10px 0 0">History of OSS</ListItem>
            <ListItem margin="10px 0 0">Big Human Projects</ListItem>
            <ListItem margin="10px 0 0">State of OSS (React)</ListItem>
            <ListItem margin="10px 0 0">Business of OSS</ListItem>
            <ListItem margin="10px 0 0">Disadvantages of OSS</ListItem>
            <ListItem margin="10px 0 0">OSS Inception</ListItem>
            <ListItem margin="10px 0 0">Involvement</ListItem>
            <ListItem margin="10px 0 0">Tanks</ListItem>
          </List>
        </Slide>
        {/* End Slide 2 */}

        {/*  Slide 3 */}
        <Slide transition={["slide"]} bgColor="primary" textColor="tertiary">
          <Heading size={3} textColor="secondary" caps>What is Open Source?</Heading>
        </Slide>
        {/* End Slide 3 */}

        {/* Slide 4 */}
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Cite>
              "Open source software is software that can be freely used, changed, and shared (in modified or unmodified form) by anyone. Open source software is made by many people, and distributed under licenses that comply with the Open Source Definition."
            </Cite>
            <Text textColor="primary" caps margin="50px 10px" textSize={20}>- Open Source Initiative</Text>
          </BlockQuote>
        </Slide>
        {/* End Slide 4 */}

        {/* Slide 5 */}
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Richard_Stallman_-_F%C3%AAte_de_l%27Humanit%C3%A9_2014_-_010.jpg/440px-Richard_Stallman_-_F%C3%AAte_de_l%27Humanit%C3%A9_2014_-_010.jpg"
            width={"35%"}
          />
          <Heading
            size={6}
            textColor="primary"
            caps
          >
            Richard Stallman
          </Heading>
        </Slide>
        {/* End Slide 5 */}

        {/* Slide 6 */}
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinuxCon_Europe_Linus_Torvalds_03_%28cropped%29.jpg/220px-LinuxCon_Europe_Linus_Torvalds_03_%28cropped%29.jpg"
            width={"35%"}
          />
          <Heading
            size={6}
            textColor="primary"
            caps
          >
            Linus Torvalds
          </Heading>
        </Slide>
        {/* End Slide 6 */}

        {/* Slide 7 */}
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading
            size={6}
            textColor="primary"
            caps
          >
            OSS Important Events
          </Heading>
          <List textColor="primary">
            <ListItem>Hacker Culture - 1970's</ListItem>
            <ListItem textSize={26} italic margin="10px 0 10px 40px">
              Traditions/philosophies from hacker culture and academia
            </ListItem>
            <ListItem textSize={26} italic margin="10px 0 10px 40px">
              Corporations owned every piece of IP / Code
            </ListItem>
            <ListItem>GNU Project - 1983</ListItem>
            <ListItem textSize={26} italic margin="10px 0 10px 40px">
              Org and Licenses aimed at securing rights and freedoms
            </ListItem>
            <ListItem textSize={26} italic margin="10px 0 10px 40px">
              Free software should be built on Free Operating System
            </ListItem>
            <ListItem>Free Software Foundation - 1985</ListItem>
            <ListItem>
              Linux v0.1 Release - 1991
            </ListItem>
            <ListItem>Netscape Open Sourced - 1998</ListItem>
            <ListItem>Open Source Initiative - 1999</ListItem>
            <ListItem textSize={26} italic margin="10px 0 10px 40px">
              Free Software --> Open Source Software
            </ListItem>
          </List>
        </Slide>
        {/* End Slide 7 */}

        {/* Slide 7 */}
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading
            size={6}
            textColor="primary"
            caps
          >
            OSS Licenses
          </Heading>
          <List textColor="primary">
            <ListItem margin="10px 0 0">Apache License 2.0</ListItem>
            <ListItem margin="10px 0 0">BSD 2-Clause "Simplified" or "FreeBSD"</ListItem>
            <ListItem margin="10px 0 0">BSD 3-Clause "New" or "Revised"</ListItem>
            <ListItem margin="10px 0 0">GNU Library or "Lesser" General Public</ListItem>
            <ListItem margin="10px 0 0">GNU General Public License (GPL)</ListItem>
            <ListItem margin="10px 0 0">MIT License</ListItem>
              <ListItem textSize={26} italic margin="10px 0 10px 40px">
                Most widely used - free of charge all grants
              </ListItem>
            <ListItem margin="10px 0 0">Mozilla Public License 2.0</ListItem>
            <ListItem margin="10px 0 0">Apache License 2.0</ListItem>
            <ListItem margin="10px 0 0">Common Development and Distribution</ListItem>
            <ListItem margin="10px 0 0">Eclipse Public License</ListItem>
          </List>
        </Slide>
        {/* End Slide 7 */}

        {/* Slide 8 */}
        <Slide transition={["slide"]} bgColor="tertiary" textColor="primary">
          <Heading
            size={6}
            textColor="primary"
            caps
          >
            Big Human Projects
          </Heading>
          <List textColor="primary">
            <ListItem margin="10px 0 0">NodeJS</ListItem>
            <ListItem margin="10px 0 0">MongoDB / Postgres / Redis</ListItem>
            <ListItem margin="10px 0 0">React / React Native</ListItem>
            <ListItem margin="10px 0 0">Webpack / Grunt / Gulp</ListItem>
            <ListItem margin="10px 0 0">Wordpress</ListItem>
            <ListItem margin="10px 0 0">... trust me many more</ListItem>
          </List>
        </Slide>
        {/* End Slide 8 */}

        {/* Slide 9 */}
        <Slide transition={["slide"]} bgColor="secondary" textColor="primary">
          <Heading
            size={6}
            textColor="primary"
            caps
          >
            State of OSS (React)
          </Heading>
          <List textColor="primary">
            <ListItem>Facebook</ListItem>
            <ListItem textSize={26} italic margin="10px 0 10px 40px">
              React / React Native
            </ListItem>
            <ListItem textSize={26} italic margin="10px 0 10px 40px">
              GraphQL / Relay
            </ListItem>
            <ListItem textSize={26} italic margin="10px 0 10px 40px">
              Jest
            </ListItem>
            <ListItem textSize={26} italic margin="10px 0 10px 40px">
              Flow
            </ListItem>
            <ListItem textSize={26} italic margin="10px 0 10px 40px">
              Reason (OCaml)
            </ListItem>
            <ListItem>Airbnb</ListItem>
            <ListItem textSize={26} italic margin="10px 0 10px 40px">
              Enzyme
            </ListItem>
            <ListItem textSize={26} italic margin="10px 0 10px 40px">
              React Native Navigation
            </ListItem>
            <ListItem textSize={26} italic margin="10px 0 10px 40px">
              JS Style Guide
            </ListItem>
            <ListItem textSize={26} italic margin="10px 0 10px 40px">
              Superset / Airflow
            </ListItem>
          </List>
        </Slide>
        {/* End Slide 9 */}

        {/* Slide 10 */}
        <Slide transition={["slide"]} bgColor="secondary" textColor="primary">
          <Heading
            size={6}
            textColor="primary"
            caps
          >
            State of OSS (React) pt. 2
          </Heading>
          <List textColor="primary">
            <ListItem>Microsoft</ListItem>
            <ListItem textSize={26} italic margin="10px 0 10px 40px">
              VSCode
            </ListItem>
            <ListItem textSize={26} italic margin="10px 0 10px 40px">
              Code Push
            </ListItem>
            <ListItem textSize={26} italic margin="10px 0 10px 40px">
              TypeScript
            </ListItem>
            <ListItem>Github</ListItem>
            <ListItem textSize={26} italic margin="10px 0 10px 40px">
              Atom
            </ListItem>
            <ListItem textSize={26} italic margin="10px 0 10px 40px">
              Electron
            </ListItem>
          </List>
        </Slide>
        {/* End Slide 10 */}

        {/* Slide 11 */}
        <Slide transition={["slide"]} bgColor="tertiary" textColor="tertiary">
          <Heading
            size={6}
            textColor="secondary"
            caps
          >
            Business of Open Source
          </Heading>
          <List textColor="primary">
            <ListItem textSize={30} padding="10px 0">
              Low-cost marketing / Hiring
            </ListItem>
            <ListItem textSize={30} padding="10px 0">
              Control future and standards
            </ListItem>
            <ListItem textSize={30} padding="10px 0">
              SaSS / OpenSaSS
            </ListItem>
            <ListItem textSize={30} padding="10px 0">
              Certifications / Support
            </ListItem>
            <ListItem textSize={30} padding="10px 0">
              Reduce development costs / premium features
            </ListItem>
            <ListItem textSize={30} padding="10px 0">
              Individual compensation
            </ListItem>
          </List>
        </Slide>
        {/* End Slide 11 */}

        {/* Slide 12 */}
        <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
          <Heading
            size={6}
            textColor="tertiary"
            caps
          >
            Low Cost Marketing / Hiring
          </Heading>
          <Image
            src="http://i1-news.softpedia-static.com/images/news2/gstreamer-1-6-open-source-multimedia-backend-gets-closer-to-release-here-s-what-s-new-489962-2.jpg"
            width={"65%"}
            margin="50px 0"
          />
        </Slide>
        {/* End Slide 12 */}

        {/* Slide 13 */}
        <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
          <Heading
            size={6}
            textColor="tertiary"
            caps
          >
            Control Future & Standards
          </Heading>
          <Image
            src="https://www.seeklogo.net/wp-content/uploads/2016/09/facebook-logo-preview.png"
            width={"40%"}
          />
        </Slide>
        {/* End Slide 13 */}

        {/* Slide 14 */}
        <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
          <Heading
            size={6}
            textColor="tertiary"
            caps
          >
            SaSS / OpenSaSS
          </Heading>
          <Image
            src="http://culturecodes.co/wp-content/logos/gitlab.png"
            width={"40%"}
            margin="60px 0"
          />
        </Slide>
        {/* End Slide 14 */}

        {/* Slide 15 */}
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading
            size={6}
            textColor="tertiary"
            caps
          >
            Certifications / Support
          </Heading>
          <Image
            src="http://i.imgur.com/8p0DoVJ.png"
            width={"80%"}
            margin="60px 0"
          />
        </Slide>
        {/* End Slide 15 */}

        {/* Slide 16 */}
        <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
          <Heading
            size={6}
            textColor="tertiary"
            caps
          >
            Reduce development costs / premium features
          </Heading>
          <Image
            src="https://freeiconshop.com/wp-content/uploads/edd/calendar-flat-2.png"
            width={"40%"}
            margin="60px 0"
          />
        </Slide>
        {/* End Slide 16 */}

        {/* Slide 17 */}
        <Slide transition={["fade"]} bgColor="secondary" textColor="tertiary">
          <Heading
            size={6}
            textColor="tertiary"
            caps
          >
            Individual Compensation
          </Heading>
          <Image
            src="http://i.imgur.com/eLBnfZB.png"
            width={"80%"}
            margin="60px 0"
          />
        </Slide>
        {/* End Slide 17 */}

        {/* Slide 18 */}
        <Slide transition={["slide"]} bgColor="tertiary" textColor="tertiary">
          <Heading
            size={6}
            textColor="secondary"
            caps
          >
            Disadvantages of OSS
          </Heading>
          <List textColor="primary">
            <ListItem textSize={30} padding="10px 0">
              Source code is openly available
            </ListItem>
            <ListItem textSize={30} padding="10px 0">
              Not reading source code can be malicious
            </ListItem>
            <ListItem textSize={30} padding="10px 0">
              Competition is fierce
            </ListItem>
            <ListItem textSize={30} padding="10px 0">
              Enterprise team building for OSS initiatives / issues
            </ListItem>
          </List>
        </Slide>
        {/* End Slide 18 */}

        {/* Slide 19 */}
        <Slide transition={["slide"]} bgColor="secondary" textColor="tertiary">
          <Image
            src="http://i.imgur.com/2eNrJq9.png"
            width={"90%"}
            margin="60px 0"
          />
        </Slide>
        {/* End Slide 19 */}

        {/* Slide 20 */}
        <Slide transition={["slide"]} bgColor="tertiary" textColor="primary">
          <Heading
            size={6}
            textColor="primary"
            caps
          >
            OSS Inception
          </Heading>
          <List textColor="primary">
            <ListItem>Facebook</ListItem>
            <ListItem>React</ListItem>
            <ListItem>Formidable Labs</ListItem>
            <ListItem>Spectacle</ListItem>
            <ListItem>VSCode</ListItem>
            <ListItem>OSS Presentation</ListItem>
          </List>
        </Slide>
        {/* End Slide 20 */}

        {/* Slide 21 */}
        <Slide transition={["slide"]} bgColor="secondary" textColor="primary">
          <Heading
            size={6}
            textColor="primary"
            caps
          >
            Interested in Open Source?
          </Heading>
          <List textColor="primary">
            <ListItem>React Native Orientation</ListItem>
            <ListItem textSize={26} italic margin="10px 0 10px 40px">
              Programmatically control your React Native's orientation
            </ListItem>
          </List>
          <List textColor="primary">
            <ListItem>React Native Create Bridge</ListItem>
            <ListItem textSize={26} italic margin="10px 0 10px 40px">
              Easy CLI tool that allows you to create a RN -> Native bridge (RN Custom Plugin)
            </ListItem>
          </List>
        </Slide>
        {/* End Slide 21 */}

        {/* Slide 22 */}
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading
            size={6}
            textColor="primary"
            caps
          >
            Tanks
          </Heading>
          <Image
            src="https://s-media-cache-ak0.pinimg.com/originals/f1/31/f8/f131f85a3d9781b1fa70b5ac59a274d1.png"
            width={"90%"}
          />
        </Slide>
        {/* End Slide 22 */}
      </Deck>
    );
  }
}
