// デプロイ時のサブディレクトリを考慮したリンク文字列を生成する。
// 使用するためには astro.config.mjs の defineConfig に base を設定すること。
export function href(s: string): string {
  let str = s;
  // スラッシュから始まるとき、それを削除する。
  if (str.charAt(0) === '/') {
    str = str.substring(1);
  } else {
    return s;
  }
  return `${import.meta.env.BASE_URL}${str}`;
}
