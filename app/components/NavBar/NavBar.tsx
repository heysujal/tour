"use client";

import React from "react";
import styles from "./NavBar.module.css";
import JSONSchemaIcon from "@/public/icons/json-schema-blue.png";
import Image from "next/image";
import cx from "classnames";
import { outfitFont } from "@/app/styles/fonts";
import LeftArrow from "@/app/styles/icons/LeftArrow";
import FiChevronRight from "@/app/styles/icons/FiChevronRight";
import { Flex, useColorMode } from "@chakra-ui/react";
import GithubIcon from "@/app/styles/icons/GithubIcon";
import MoonIcon from "@/app/styles/icons/MoonIcon";
import SettingsIcon from "@/app/styles/icons/SettingsIcon";
import OutlineMenuIcon from "@/app/styles/icons/OutlineMenuIcon";

export default function NavBar() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div className={styles.navBar}>
      <div className={styles.leftContentWrapper}>
        <div className={styles.logoTitle}>
          <Image
            src={JSONSchemaIcon}
            alt="JSON Schema Logo"
            width={40}
            height={40}
          />
          <div className={cx(styles.title, outfitFont.className)}>
            A Tour of JSON Schema
          </div>
        </div>
        <div className={styles.contentNavigation}>
          <button className={styles.backBtn}>
            <LeftArrow />
          </button>
          <Flex dir="row" align="center" gap={"8px"}>
            <div className={styles.chapterTitle}>Chapter 1: Introduction</div>
            <div className={styles.breadcrumbIcon}>
              <FiChevronRight />
            </div>
            <div className={styles.lessonTitle}>Lesson 1: Introduction</div>
          </Flex>
        </div>
      </div>
      <div className={styles.rightContentWrapper}>
        <button className={styles.menuButton}>
          <GithubIcon />
        </button>
        <button className={styles.menuButton} onClick={toggleColorMode}>
          <MoonIcon />
        </button>
        <button className={styles.menuButton}>
          <SettingsIcon />
        </button>
        <button className={styles.menuButton}>
          <OutlineMenuIcon />
        </button>
      </div>
    </div>
  );
}
