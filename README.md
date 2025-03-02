# ProjectHub

## プロジェクト概要

ProjectHubは、チームのプロジェクト管理を効率化する次世代プラットフォームです。直感的なインターフェースと高度な機能により、プロジェクト計画からタスク管理、レポーティングまでをシームレスに実現します。

## 主要機能

- プロジェクト・タスク管理
- チームコラボレーション
- カスタムダッシュボード
- 詳細なレポート・分析
- 外部サービス連携（GitHub、Slack等）
- リアルタイム通知

## 技術スタック

### フロントエンド
- **Next.js**: Reactベースのフロントエンドフレームワーク
- **TypeScript**: 型安全な開発
- **Tailwind CSS**: UIスタイリング
- **React Query**: データフェッチング・キャッシュ管理

### バックエンド
- **Spring Boot**: Javaベースのバックエンドフレームワーク
- **Spring Security**: 認証・認可
- **Spring Data JPA**: データアクセス層
- **PostgreSQL**: リレーショナルデータベース

### インフラストラクチャ
- **AWS ECS/EKS**: コンテナオーケストレーション
- **AWS RDS**: データベースサービス
- **AWS S3**: ファイルストレージ
- **AWS CloudFront**: CDN

## プロジェクト構造

```
ProjectHub/
├── frontend/                  # Next.jsフロントエンドアプリケーション
├── backend/                   # Spring Bootバックエンドアプリケーション
├── infrastructure/            # インフラストラクチャ・アズ・コード
└── docs/                      # プロジェクトドキュメント
    └── diagrams/              # アーキテクチャ・設計図
        ├── architecture/      # システムアーキテクチャ図
        ├── backend/           # バックエンド設計図
        ├── database/          # データベース設計図
        ├── deployment/        # デプロイメント関連図
        ├── flows/             # プロセスフロー図
        └── frontend/          # フロントエンド設計図
```

## ドキュメント構造

プロジェクトの設計ドキュメントは、`docs/diagrams`ディレクトリ内にカテゴリごとに整理されています：

- **architecture/**: システム全体のアーキテクチャとセキュリティ設計
  - `system-architecture-revised.mermaid`: システムアーキテクチャ図
  - `security-measures.mermaid`: セキュリティ対策設計

- **backend/**: バックエンド設計
  - `backend-class-diagram.mermaid`: バックエンドクラス図
  - `backend-package-structure.mermaid`: パッケージ構造

- **database/**: データベース設計
  - `database-er-diagram-revised.mermaid`: ER図

- **deployment/**: デプロイメント設計
  - `aws-deployment-diagram.mermaid`: AWS構成図
  - `cicd-pipeline-diagram.mermaid`: CI/CDパイプライン
  - `deployment-strategy.mermaid`: デプロイメント戦略
  - `implementation-phases.mermaid`: 実装フェーズ計画
  - `performance-optimization.mermaid`: パフォーマンス最適化戦略

- **flows/**: プロセスフロー設計
  - `auth-flow-diagram.mermaid`: 認証フロー
  - `task-creation-sequence.mermaid`: タスク作成シーケンス
  - `task-state-diagram.mermaid`: タスク状態遷移図

- **frontend/**: フロントエンド設計
  - `frontend-component-diagram.mermaid`: コンポーネント構造
  - `frontend-directory-structure.mermaid`: ディレクトリ構造

## 開発環境セットアップ

### 前提条件
- Node.js 16+
- Java 17+
- Docker Desktop
- AWS CLI

### フロントエンド
```bash
cd frontend
npm install
npm run dev
```

### バックエンド
```bash
cd backend
./gradlew bootRun
```

### コンテナ開発環境
```bash
docker-compose up -d
```

## 開発フロー

1. フィーチャーブランチでの開発
2. プルリクエスト提出
3. コードレビュー
4. CI/CDパイプラインによる自動テスト
5. ステージング環境へのデプロイ
6. QAテスト
7. 本番環境へのデプロイ

## デプロイメント

プロジェクトは段階的に以下の3フェーズでデプロイされます：

1. **フェーズ1**: モノリスMVP
2. **フェーズ2**: スケールアップと拡張機能
3. **フェーズ3**: マイクロサービス化とエンタープライズ機能

詳細は `docs/diagrams/deployment/implementation-phases.mermaid` を参照してください。

## 貢献ガイドライン

- コミットメッセージは[Conventional Commits](https://www.conventionalcommits.org/)形式に従う
- 新機能は必ずテストを含める
- PRの説明は明確かつ詳細に記述する

## ライセンス

本プロジェクトは独自ライセンスのもとで提供されています。
