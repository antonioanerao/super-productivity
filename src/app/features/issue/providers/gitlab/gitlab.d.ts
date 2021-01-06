export interface GitlabCfg {
  isSearchIssuesFromGitlab: boolean;
  isAutoAddToBacklog: boolean;
  isAutoPoll: boolean;
  filterUsername: string | null;
  gitlabBaseUrl: string | null;
  project: string | null;
  token: string | null;
}
