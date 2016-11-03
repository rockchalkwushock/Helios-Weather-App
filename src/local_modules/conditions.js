export const weatherConditionCheck = {
  codeToIdentifier: (code) => {
    switch (true) {
      case ((code === 800) || (code === 951)): return 'clear';
      case ((code === 801) ||
            (code === 802) ||
            (code === 803) ||
            (code === 804) ||
            (code === 731) ||
            (code === 751) ||
            (code === 952) ||
            (code === 953) ||
            (code === 954) ||
            (code === 955) ||
            (code === 956) ||
            (code === 957) ||
            (code === 958) ||
            (code === 959) ||
            (code === 962)): return 'cloudy';
      case ((code === 200) ||
            (code === 201) ||
            (code === 202) ||
            (code === 210) ||
            (code === 211) ||
            (code === 212) ||
            (code === 221) ||
            (code === 230) ||
            (code === 231) ||
            (code === 232) ||
            (code === 960) ||
            (code === 961) ||
            (code === 300) ||
            (code === 301) ||
            (code === 302) ||
            (code === 310) ||
            (code === 311) ||
            (code === 312) ||
            (code === 313) ||
            (code === 314) ||
            (code === 321) ||
            (code === 701) ||
            (code === 500) ||
            (code === 501) ||
            (code === 502) ||
            (code === 503) ||
            (code === 504) ||
            (code === 511) ||
            (code === 615) ||
            (code === 616) ||
            (code === 620) ||
            (code === 621) ||
            (code === 622) ||
            (code === 520) ||
            (code === 521) ||
            (code === 522) ||
            (code === 531)): return 'rain';
      case ((code === 600) ||
            (code === 601) ||
            (code === 602) ||
            (code === 611) ||
            (code === 612)): return 'snow';
      default: return 'stock';
    }
  }
};
