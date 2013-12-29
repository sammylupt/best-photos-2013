JavaScript program to parse an array of strings and turn them into objects, exporting the results as JSON.

e.g. source

```
"&lt;b&gt;NOOR KHAMIS&lt;/b&gt;, Kenya &lt;br/&gt; &lt;br/&gt; “The particular day I documented this image started very early as I was just getting back to the office after covering a small blast in the Mathare slum neighborhood on the outskirts of Kenya’s capital Nairobi. It’s at this juncture that my colleague, Thomas Mukoya, called to advise me of another alert from the Westgate Shopping Mall and he was rushing to the scene to check. &lt;br/&gt; &lt;br/&gt; Minutes later he called to tell me it was bad and he was with Goran Tomasevic at the scene. I immediately picked up a safety vest for both of us, two helmets and a gas mask. On arrival at the shopping mall I met Goran, our regional chief photographer, taking cover at the front entrance of Westgate. I handed him the extra helmet and the gas mask and made my way to the back entrance. &lt;br/&gt; &lt;br/&gt; What met my eyes was shocking. Experience was a guiding principle as I set my eyes on the woman writhing on the floor. With all the confusion surrounding us, I knelt down to assure her help was close by as I took several images at the same time.This particular image summarized for me the horror of the breaking news event and was the first image I transmitted.” &lt;br/&gt; &lt;br/&gt; Canon 5D Mark III, lens 24-70mm, f3.5, 1/250, ISO 400  &lt;br/&gt; &lt;br/&gt; Caption: An injured woman cries for help after gunmen stormed the Westgate shopping mall in Nairobi September 21, 2013. REUTERS/Noor Khamis    &lt;br/&gt; &lt;br/&gt;  &lt;a href=&quot;http://blogs.reuters.com/fullfocus/2013/09/23/westgate-mall-massacre-goran-tomasevic/&quot;&gt;Click here for a related gallery&lt;/a&gt;"
```

turns into:

```
{"name":"Noor Khamis",
 "location":"Kenya",
 "caption":"An injured woman cries for help after gunmen stormed the Westgate shopping mall in Nairobi September 21, 2013. REUTERS/Noor Khamis",
"camera" {
	"lens":"24-70mm",
	"prime":true,
	"aperture":"f3.5",
	"iso":"400",
	"shutter":"1/250"
	}
}
```