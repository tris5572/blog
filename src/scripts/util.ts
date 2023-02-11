// デプロイ時のサブディレクトリを考慮したリンク文字列を生成する。
// 使用するためには astro.config.mjs の defineConfig に base を設定すること。
export function href(s: string): string {
  return `${import.meta.env.BASE_URL}${s}`;
}
