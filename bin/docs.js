#!/usr/bin/env node
/* eslint-env node */
import { exec } from 'child_process';

const cmd = `vitepress dev ./node_modules/@only_you/fast-code-vue3/docs --port 3000`;
exec(cmd, (error, stdout, stderr) => {
  if (error) {
    console.error(`执行出错: ${error}`);
  }
});