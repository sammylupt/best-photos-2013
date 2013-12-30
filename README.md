JavaScript program to parse an array of complex strings and turn them into objects, exporting the results as JSON. Eventually the JSON returned from this program will be used to populate another website.

Included here is the source (source-array.js), the app code itself (app.js), and a runner file (runner.js) which generates the resulting formatted json file (results.json).



Uses as a source the JSON file referenced at [this page](http://blogs.reuters.com/fullfocus/2013/12/01/best-photos-of-the-year-2013/), which is a list of Reuters Best Photos of 2013.

###Example of source

```
"&lt;b&gt;NOOR KHAMIS&lt;/b&gt;, Kenya &lt;br/&gt; &lt;br/&gt; “The particular day I documented this image started very early as I was just getting back to the office after covering a small blast in the Mathare slum neighborhood on the outskirts of Kenya’s capital Nairobi. It’s at this juncture that my colleague, Thomas Mukoya, called to advise me of another alert from the Westgate Shopping Mall and he was rushing to the scene to check.&lt;br/&gt; &lt;br/&gt; What met my eyes was shocking. Experience was a guiding principle as I set my eyes on the woman writhing on the floor. With all the confusion surrounding us, I knelt down to assure her help was close by as I took several images at the same time.This particular image summarized for me the horror of the breaking news event and was the first image I transmitted.” &lt;br/&gt; &lt;br/&gt; Canon 5D Mark III, lens 24-70mm, f3.5, 1/250, ISO 400  &lt;br/&gt; &lt;br/&gt; Caption: An injured woman cries for help after gunmen stormed the Westgate shopping mall in Nairobi September 21, 2013. REUTERS/Noor Khamis    &lt;br/&gt; &lt;br/&gt;  &lt;a href=&quot;http://blogs.reuters.com/fullfocus/2013/09/23/westgate-mall-massacre-goran-tomasevic/&quot;&gt;Click here for a related gallery&lt;/a&gt;"
```

###Example of output

```
{"name":"Noor Khamis",
 "location":"Kenya",
 "caption":"An injured woman cries for help after gunmen stormed the Westgate shopping mall in Nairobi September 21, 2013. REUTERS/Noor Khamis",
"camera" {
    "manufacturer":"Canon",
    "model":"5D Mark III",
	"lens":"24-70mm",
	"prime":true,
	"aperture":"f3.5",
	"iso":"400",
	"shutter":"1/250"
	}
}
```