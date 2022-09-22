import { Octokit } from "@octokit/rest";

import config from './config.ts';

export const octokit = new Octokit({
     auth: config.github.accessToken,
     userAgent: config.github.userAgent
});
