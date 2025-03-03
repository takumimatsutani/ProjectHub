#!/bin/bash

echo "ProjectHub 環境チェック"
echo "======================="

# Node.jsバージョンチェック
if command -v node &> /dev/null; then
    NODE_VERSION=$(node -v)
    echo "✅ Node.js: $NODE_VERSION"
    if [[ ${NODE_VERSION:1:2} -lt 16 ]]; then
        echo "⚠️  Node.jsはv16以上が必要です"
    fi
else
    echo "❌ Node.jsがインストールされていません"
fi

# Javaバージョンチェック
if command -v java &> /dev/null; then
    JAVA_VERSION=$(java -version 2>&1 | head -1 | cut -d'"' -f2 | sed '/^1\./s///' | cut -d'.' -f1)
    echo "✅ Java: バージョン $JAVA_VERSION"
    if [[ $JAVA_VERSION -lt 17 ]]; then
        echo "⚠️  JavaはJDK 17以上が必要です"
    fi
else
    echo "❌ Javaがインストールされていません"
fi

# Dockerチェック
if command -v docker &> /dev/null; then
    echo "✅ Docker: インストール済み"
    docker --version
else
    echo "❌ Dockerがインストールされていません"
fi

# AWS CLIチェック
if command -v aws &> /dev/null; then
    echo "✅ AWS CLI: インストール済み"
    aws --version
else
    echo "❌ AWS CLIがインストールされていません"
fi

echo ""
echo "環境チェック完了"