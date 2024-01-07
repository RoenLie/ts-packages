## Purpose
Here the workflow for each package branch will be located.
Each branch will only know about irs own workflows, but the main repository which is responsible for running each workflow, will have all workflows merged through pull requests at the same time that the rest of the branches content is merged.

### Naming convention
Each workflow must begin with the name of the package, followed by a dash (-) and then a reasonably short but information name describing what the action does.
**Example:** tsconfig-npm-publish
This ensures that when viewing the main branch, it is easy to locate workflows that belong together.