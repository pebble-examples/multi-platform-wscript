# multi-platform-wscript

Example project demonstrating how to modify a Pebble project wscript file to
separate code by platform.

This involves modifying `wscript` to search new `aplite`, `basalt`, and `common`
directories in `src` that are to be compiled only for those platforms.