# MIME types

###### tags: `Web`

MIME 是給網際網路上傳輸的內容賦予的分類類型，[這邊](https://zh.wikipedia.org/zh-tw/%E4%BA%92%E8%81%94%E7%BD%91%E5%AA%92%E4%BD%93%E7%B1%BB%E5%9E%8B)或[這邊](https://zh.wikipedia.org/wiki/%E5%A4%9A%E7%94%A8%E9%80%94%E4%BA%92%E8%81%AF%E7%B6%B2%E9%83%B5%E4%BB%B6%E6%93%B4%E5%B1%95)看名詞解釋

前端上傳的時候很常遇到，需要限制檔案類型的情況  
因此將常用的 Mime type 做整理  
更多的可以參考[這邊](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types)或是[這邊](http://www.iana.org/assignments/media-types/media-types.xhtml)  

## MIME Type


| 副檔名 | MIME Type | 說明 |
| -------- | -------- | -------- |
| `.css` | `text/css`  | Cascading Style Sheets (CSS) |
| `.csv` | `text/csv`  | Comma-separated values (CSV) |
| `.doc` | `application/msword`  | Microsoft Word |
| `.docx` | `application/vnd.openxmlformats-officedocument.wordprocessingml.document`   | Microsoft Word (OpenXML) |
| `.gif` | `image/gif`  | Graphics Interchange Format (GIF) |
| `.htm` | `text/html`  | HyperText Markup Language (HTML) |
| `.html` | `text/html`  | HyperText Markup Language (HTML) |
| `.ico` | `image/vnd.microsoft.icon`  | Icon format |
| `.jpeg` | `image/jpeg`  | JPEG images |
| `.jpg` | `image/jpeg`  | JPEG images |
| `.js` | `text/javascript`  | JavaScript |
| `.json` | `application/json`  | JSON format |
| `.mov` | `video/quicktime`  | Apple QuickTime movie |
| `.mp3` | `audio/mpeg`  | MP3 audio |
| `.mp4` | `video/mp4`  | MP4 video |
| `.mpeg` | `video/mpeg`  | MPEG Video |
| `.ods` | `application/vnd.oasis.opendocument.spreadsheet`  | OpenDocument spreadsheet document |
| `.png` | `image/png`  | Portable Network Graphics |
| `.pdf` | `application/pdf`  | Adobe Portable Document Format (PDF)  |
| `.ppt` | `application/vnd.ms-powerpoint`  | Microsoft PowerPoint |
| `.pptx` | `application/vnd.openxmlformats-officedocument.presentationml.presentation`  | Microsoft PowerPoint (OpenXML) |
| `.rar	` | `application/vnd.rar`  | RAR archive |
| `.svg` | `image/svg+xml`  | Scalable Vector Graphics (SVG) |
| `.tif` | `image/tiff`  | Tagged Image File Format (TIFF)  |
| `.tiff` | `image/tiff`  | Tagged Image File Format (TIFF)  |
| `.txt` | `text/plain`  | Text, (generally ASCII or ISO 8859-n) |
| `.wav` | `audio/wav`  | Waveform Audio Format |
| `.weba` | `audio/webm`  | WEBM audio |
| `.webm` | `video/webm`  | WEBM video |
| `.webp` | `image/webp`  | WEBP image |
| `.wmv` | `video/x-ms-wmv`  | Windows Media Video |
| `.woff` | `font/woff`  | Web Open Font Format (WOFF) |
| `.woff2` | `font/woff2`  | Web Open Font Format (WOFF) |
| `.xhtml` | `application/xhtml+xml`  | XHTML |
| `.xls` | `application/vnd.ms-excel`  | Microsoft Excel |
| `.xlsx` | `application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`  | Microsoft Excel (OpenXML) |
| `.xml` | `application/xml`  | XML |
| `.zip` | `application/zip`  | ZIP archive |


## 例外情況
* .zip 正常情況是 `application/zip`
但可能會因為使用者壓縮的方法不同，導致有[不同的 mine type](https://stackoverflow.com/questions/4411757/zip-mime-types-when-to-pick-which-one)

* mp4 使用 `video/mp4`，會跑出 mp4 和 m4v


