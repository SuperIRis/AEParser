AEParser (v.0.1)


Adobe After Effects can export video tracking points so you can use them anyway you want. The problem is that the points are exported in a legible text format, so if you want to use them in any programming language they are useless. This JS simply parses the text and converts it into a useful JSON. 


Usage
-----

You just have to make a call to AEParser.parse with all the After Effects text as a unique parameter. The result is the json Object.

The example uses JSON.stringify to output the json, so it may not work in old versions of IE and maybe other ancient browsers.



Example After Effects Text:
---------------------------

Adobe After Effects 6.0 Keyframe Data

  Units Per Second  23.976
  Source Width  1920
  Source Height 1080
  Source Pixel Aspect Ratio 1
  Comp Pixel Aspect Ratio 1

Anchor Point
  Frame X pixels  Y pixels  Z pixels
  144 1257.13 496.074 0
  145 1257.54 498.967 0

Position
  Frame X pixels  Y pixels  Z pixels
  144 1257.13 496.074 0
  145 1257.54 498.967 0

Scale
  Frame X percent Y percent Z percent
  144 100 100 100
  145 100.053 100.053 100

Rotation
  Frame Degrees
  144 2.26191
  145 2.27979

End of Keyframe Data
