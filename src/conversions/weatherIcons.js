export const weatherIcons = {
  codeToIcon: (code) => {
    switch (true) {
      case ((code === 200) ||
            (code === 201) ||
            (code === 202) ||
            (code === 210)): return 'storm-showers';
      case ((code === 211) ||
            (code === 212) ||
            (code === 221) ||
            (code === 230) ||
            (code === 231) ||
            (code === 232) ||
            (code === 960) ||
            (code === 961)): return 'thunderstorm';
      case ((code === 300) ||
            (code === 301) ||
            (code === 302) ||
            (code === 310) ||
            (code === 311) ||
            (code === 312) ||
            (code === 313) ||
            (code === 314) ||
            (code === 321) ||
            (code === 701)): return 'sprinkle';
      case ((code === 500) ||
            (code === 501) ||
            (code === 502) ||
            (code === 503) ||
            (code === 504)): return 'rain';
      case ((code === 511) ||
            (code === 615) ||
            (code === 616) ||
            (code === 620) ||
            (code === 621) ||
            (code === 622)): return 'rain-mix';
      case ((code === 520) ||
            (code === 521) ||
            (code === 522) ||
            (code === 531) ||
            (code === 504)): return 'showers';
      case ((code === 600) ||
            (code === 601) ||
            (code === 602)): return 'snow';
      case ((code === 611) ||
            (code === 612)): return 'sleet';
      case (code === 711): return 'smoke';
      case (code === 721): return 'day-haze';
      case ((code === 731) ||
            (code === 751) ||
            (code === 952) ||
            (code === 953) ||
            (code === 954) ||
            (code === 955) ||
            (code === 956) ||
            (code === 957) ||
            (code === 958) ||
            (code === 959) ||
            (code === 962)): return 'cloudy-gusts';
      case (code === 741): return 'fog';
      case (code === 761): return 'dust';
      case (code === 762): return 'smog';
      case (code === 771): return 'day-windy';
      case ((code === 781) || (code === 900)): return 'tornado';
      case ((code === 800) || (code === 951)): return 'sunny';
      case ((code === 801) ||
            (code === 802) ||
            (code === 803) ||
            (code === 804)): return 'cloudy';
      case ((code === 901) || (code === 902)): return 'hurricane';
      case (code === 903): return 'snowflake-cold';
      case (code === 904): return 'hot';
      case (code === 905): return 'windy';
      case (code === 906): return 'hail';
    }
  }
};
