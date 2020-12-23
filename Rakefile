# Quick-open the workspace
task :default do
  system <<~END_OF_DOC
    atom .
    tmux \
      new-session "yarn run serve" \\;\
      split-window
  END_OF_DOC
end
