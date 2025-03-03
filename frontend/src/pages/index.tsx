import React from 'react';
import Head from 'next/head';
import { Button } from '@/components/common/Button';

export default function Home() {
  return (
    <>
      <Head>
        <title>ProjectHub - ダッシュボード</title>
      </Head>
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <h1 className="text-3xl font-bold text-gray-900">ProjectHub</h1>
          </div>
        </header>
        <main className="max-w-7xl mx-auto px-4 py-6">
          <div className="bg-white p-6 rounded-lg shadow mb-6">
            <h2 className="text-xl font-semibold mb-4">ようこそ、ProjectHubへ！</h2>
            <p className="mb-4">これはNext.js、TypeScript、Tailwind CSSを使用したサンプルダッシュボードです。</p>
            <Button>始める</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-lg font-medium mb-2">プロジェクト {item}</h3>
                <p className="text-gray-600 mb-4">サンプルプロジェクトの説明文がここに入ります。</p>
                <div className="flex justify-end">
                  <Button variant="secondary" size="sm">詳細を見る</Button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}