**Git is the free and open source distributed version control system that's responsible for everything GitHub related that happens locally on your computer. This cheat sheet features the most important and commonly used Git commands for easy reference.


**SETUP****

Configuring user information used across all local repositories


**git config --global user.name “[firstname lastname]”**

set a name that is identifiable for credit when review version history


**git config --global user.email “[valid-email]”**

set an email address that will be associated with each history marker


**SETUP & INIT**

Configuring user information, initializing and cloning repositories


**git init**

initialize an existing directory as a Git repository


**git clone [url]**

retrieve an entire repository from a hosted location via URL


**STAGE & SNAPSHOT**

Working with snapshots and the Git staging area


**git status**

show modified files in working directory, staged for your next commit


**git add [file]**

add a file as it looks now to your next commit (stage)


**git commit -m “[descriptive message]”**

commit your staged content as a new commit snapshot


**BRANCH**

Isolating work in branches, changing context, and integrating changes


**git branch**

list your branches. a * will appear next to the currently active branch


**git branch [branch-name]**

create a new branch at the current commit
