#!/bin/bash
shopt -s nullglob
files=(gulp-*)

outfile="output.md"

cat README.md > $outfile
for i in ${files[*]}
do
  cat $i/README.md >> $outfile
  echo "\`\`\`" >> $outfile
  cat $i/gulpfile.js >> $outfile
  echo "\`\`\`" >> $outfile
done
