import { mkdirSync, writeFileSync } from "node:fs";

const story = "He came home. Nobody remembered him.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", story, "utf8");
