# お絵描きツール (TypeScript + React + Storybook)

React 18とTypeScriptで構築されたお絵描きアプリケーションです。機能別のモジュラーアーキテクチャを採用しています。

## デモプレイ
https://yunbow.github.io/react-app-paint/demo/

## 主要機能

### 描画機能
- ペンツールでの自由描画
- 色の選択・変更
- 線の太さの調整（1px～50px）
- 消しゴムツールでの部分消去
- 全消去機能

### 保存機能
- PNG形式での画像保存
- ダウンロード機能

### 操作方法
- **マウス/タッチ操作**: 直感的な描画操作
- **カラーピッカー**: クリックで色選択
- **スライダー**: 線の太さ調整
- **ツール切り替え**: ペンと消しゴムの切り替え
- **保存ボタン**: 作品をPNG形式でダウンロード
- **全消去ボタン**: キャンバスをクリア

## 技術スタック

- **React 18** - UIライブラリ
- **TypeScript** - プログラミング言語
- **Storybook 7** - コンポーネント開発・ドキュメント
- **CSS Modules** - スタイリング
- **Vite** - ビルドツール

## プロジェクト構造

```
src/
├── features/                   # 機能別モジュール
│   └── paint/                  # ペイント機能
│       ├── components/         # 機能専用コンポーネント
│       │   ├── Toolbar/        # ツールバー
│       │   ├── DrawingCanvas/  # 描画キャンバス
│       │   ├── BrushSizeControl/   # 線の太さ制御
│       │   ├── ColorControl/       # 色制御
│       │   ├── ToolSelector/       # ツール選択
│       │   └── ActionButtons/      # アクションボタン群
│       ├── PaintApp/           # 機能ルートコンポーネント
│       ├── useCanvas.ts        # Canvas操作フック
│       └── types.ts            # 機能固有の型定義
├── components/                 # 共通UIコンポーネント
│   ├── Button/                 # 操作ボタン
│   ├── ColorPicker/            # カラー選択
│   ├── RangeSlider/            # スライダー
│   └── Text/                   # テキスト表示
├── stories/                    # Storybook用ストーリー
├── App.tsx                     # メインアプリ
└── main.tsx                    # エントリーポイント
```

## スクリプト

```bash
# セットアップ
npm install

# 開発サーバー起動
npm run dev

# ビルド
npm run build

# プレビュー
npm run preview

# Storybook起動
npm run storybook

# Storybook ビルド
npm run build-storybook
```

## ライセンス

MIT License