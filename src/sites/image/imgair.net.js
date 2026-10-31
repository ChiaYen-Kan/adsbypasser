/**
 * @domain cloudgallery.net
 * @domain imgair.net
 * @domain imgblaze.net
 * @domain imgfrost.net
 * @domain imgouskel.sbs
 * @domain pixsera.net
 */
_.register({
  rule: {
    host: [
      /^cloudgallery\.net$/,
      /^img[a-z]{2,10}\.sbs$/,
      /^imgair\.net$/,
      /^imgblaze\.net$/,
      /^imgfrost\.net$/,
      /^pixsera\.net$/,
    ],
  },
  async ready() {
    const matches = $.searchFromScripts(/imgbg\.src = "([^"]+)";/);
    await $.openImage(matches[1], { referer: true });
  },
});
