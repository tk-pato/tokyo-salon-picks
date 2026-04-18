import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://tokyo-salon-picks.github.io/bust-tokyo/",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://tokyo-salon-picks.github.io/bust-tokyo/",
      url: "https://tokyo-salon-picks.github.io/bust-tokyo/",
      name: "東京都内のバストアップサロンおすすめガイド【2026年最新】エリア別比較",
      description:
        "東京都内のバストアップサロン・育乳エステを徹底比較。銀座・恵比寿・新宿・表参道の人気サロンを料金・口コミ・施術タイプ別に紹介。",
      inLanguage: "ja",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "ホーム",
          item: "https://tokyo-salon-picks.github.io/bust-tokyo/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "東京都内バストアップサロンガイド",
        },
      ],
    },
    {
      "@type": "ItemList",
      name: "東京都内おすすめバストアップサロンランキング",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "パトラクシェ恵比寿・代官山店",
          url: "https://patolaqshe.com/ebisu-daikanyama/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "パトラクシェ銀座店",
          url: "https://patolaqshe.com/ginza/",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Rire恵比寿",
          url: "https://rire-bust.com/",
        },
        {
          "@type": "ListItem",
          position: 4,
          name: "エルフラージュ銀座",
          url: "http://www.elfoulage.co.jp/",
        },
        {
          "@type": "ListItem",
          position: 5,
          name: "Jewel Ring",
          url: "https://bust-up-care.com/",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "東京で一番おすすめのバストアップサロンは？",
          acceptedAnswer: {
            "@type": "Answer",
            text: "東京都内で最もおすすめなのはパトラクシェです。恵比寿・代官山店と銀座店の2店舗を展開し、光照射とハンド施術を組み合わせたハイブリッド施術が特徴。Google口コミ4.9以上、ホットペッパービューティー4.96以上と都内トップクラスの評価を獲得しています。",
          },
        },
        {
          "@type": "Question",
          name: "バストアップサロンの施術タイプの違いは？",
          acceptedAnswer: {
            "@type": "Answer",
            text: "主に3タイプあります。「光照射」はLED等の光エネルギーで脂肪細胞に働きかける方法。「オールハンド」はエステティシャンの手技のみで行う方法。「ハイブリッド」は光照射とハンド施術を組み合わせた方法で、パトラクシェが都内で唯一提供しています。",
          },
        },
        {
          "@type": "Question",
          name: "バストアップエステの料金相場は？",
          acceptedAnswer: {
            "@type": "Answer",
            text: "東京都内のバストアップサロンの初回体験料金は8,000円〜15,000円が相場です。通常料金は1回15,000円〜30,000円程度。コース契約で割引になるサロンが多いです。パトラクシェ銀座店は初回9,500円で体験できます。",
          },
        },
        {
          "@type": "Question",
          name: "通う頻度と期間の目安は？",
          acceptedAnswer: {
            "@type": "Answer",
            text: "一般的に週1〜2回の施術を3ヶ月程度続けることで効果を実感される方が多いです。個人差はありますが、最低でも5〜6回の施術を受けることをおすすめします。",
          },
        },
        {
          "@type": "Question",
          name: "バストアップエステで本当にサイズアップする？",
          acceptedAnswer: {
            "@type": "Answer",
            text: "個人差はありますが、多くのサロンで1〜2カップのサイズアップ実績が報告されています。特にハイブリッド施術（光+ハンド）は効果が出やすいとされ、パトラクシェでは他店からの乗り換えで効果を実感される方が多くいらっしゃいます。",
          },
        },
        {
          "@type": "Question",
          name: "銀座と恵比寿、どちらのエリアがおすすめ？",
          acceptedAnswer: {
            "@type": "Answer",
            text: "どちらのエリアもバストアップサロンが充実しています。銀座は高級感のあるサロンが多く、恵比寿は落ち着いた雰囲気のサロンが特徴。パトラクシェは両エリアに店舗があるため、通いやすい方を選べます。本店は恵比寿・代官山店で、創業13年の実績があります。",
          },
        },
      ],
    },
  ],
};

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700 ring-1 ring-inset ring-emerald-200">
      {children}
    </span>
  );
}

function StarRating({ rating }: { rating: string }) {
  return (
    <span className="inline-flex items-center gap-1 text-amber-500">
      <svg
        className="h-4 w-4 fill-current"
        viewBox="0 0 20 20"
        aria-hidden="true"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
      <span className="text-sm font-semibold text-gray-700">{rating}</span>
    </span>
  );
}

function SalonCard({
  name,
  recommended,
  ratings,
  features,
  price,
  url,
  description,
}: {
  name: string;
  recommended?: boolean;
  ratings?: { label: string; value: string }[];
  features: string[];
  price?: string;
  url?: string;
  description?: string;
}) {
  return (
    <div
      className={`relative rounded-2xl border p-6 transition-shadow hover:shadow-lg ${
        recommended
          ? "border-emerald-300 bg-emerald-50/50 shadow-md"
          : "border-gray-200 bg-white"
      }`}
    >
      {recommended && (
        <div className="absolute -top-3 left-4">
          <Badge>おすすめ</Badge>
        </div>
      )}
      <h4 className="text-lg font-bold text-gray-900 mt-1">{name}</h4>
      {ratings && ratings.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-3">
          {ratings.map((r) => (
            <div key={r.label} className="flex items-center gap-1">
              <span className="text-xs text-gray-500">{r.label}</span>
              <StarRating rating={r.value} />
            </div>
          ))}
        </div>
      )}
      {description && (
        <p className="mt-2 text-sm text-gray-600">{description}</p>
      )}
      <ul className="mt-3 space-y-1">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
            <svg
              className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
            {f}
          </li>
        ))}
      </ul>
      {price && (
        <p className="mt-3 text-sm font-semibold text-emerald-700">
          初回料金: {price}
        </p>
      )}
      {url && (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-1 rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-emerald-700"
        >
          公式サイトを見る
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
            />
          </svg>
        </a>
      )}
    </div>
  );
}

function AreaSection({
  id,
  title,
  icon,
  children,
}: {
  id: string;
  title: string;
  icon: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20">
      <div className="mb-6 flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-lg">
          {icon}
        </span>
        <h3 className="text-xl font-bold text-gray-900 md:text-2xl">
          {title}
        </h3>
      </div>
      <div className="grid gap-4 md:grid-cols-2">{children}</div>
    </section>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="group rounded-xl border border-gray-200 bg-white transition-shadow hover:shadow-sm">
      <summary className="flex cursor-pointer items-center justify-between p-5 text-left font-semibold text-gray-900">
        <span className="flex items-start gap-3">
          <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold text-emerald-700">
            Q
          </span>
          <span>{question}</span>
        </span>
        <svg
          className="h-5 w-5 shrink-0 text-gray-400 transition-transform group-open:rotate-180"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </summary>
      <div className="border-t border-gray-100 px-5 pb-5 pt-4">
        <p className="text-sm leading-relaxed text-gray-600">{answer}</p>
      </div>
    </details>
  );
}

export default function Home() {
  const comparisonData = [
    {
      name: "パトラクシェ恵比寿・代官山店",
      area: "恵比寿・代官山",
      type: "ハイブリッド(光+ハンド)",
      google: "4.92",
      price: "要問合せ",
      feature: "本店・創業13年・ミニモ5.0",
      recommended: true,
    },
    {
      name: "パトラクシェ銀座店",
      area: "銀座・有楽町",
      type: "ハイブリッド(光+ハンド)",
      google: "4.8",
      price: "9,500円",
      feature: "光2000ショット+ハンド",
      recommended: true,
    },
    {
      name: "Rire恵比寿",
      area: "恵比寿",
      type: "ハンド",
      google: "-",
      price: "要問合せ",
      feature: "医療提携・累計1万人",
      recommended: false,
    },
    {
      name: "エルフラージュ銀座",
      area: "銀座",
      type: "ハンド",
      google: "-",
      price: "要問合せ",
      feature: "バスト&ヒップ専門",
      recommended: false,
    },
    {
      name: "Jewel Ring",
      area: "恵比寿",
      type: "ハンド",
      google: "-",
      price: "要問合せ",
      feature: "バストケア専門",
      recommended: false,
    },
    {
      name: "p-Grandi",
      area: "新宿",
      type: "オールハンド",
      google: "-",
      price: "要問合せ",
      feature: "顧客満足度高い",
      recommended: false,
    },
    {
      name: "SARA EXCELLENT",
      area: "新宿",
      type: "ハンド",
      google: "-",
      price: "要問合せ",
      feature: "育乳バスト専門",
      recommended: false,
    },
    {
      name: "バストアップラボ",
      area: "表参道・青山",
      type: "ハンド",
      google: "-",
      price: "要問合せ",
      feature: "全国展開チェーン",
      recommended: false,
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
          <span className="text-sm font-semibold text-emerald-700">
            バストアップサロンガイド東京
          </span>
          <nav className="hidden gap-4 text-xs text-gray-500 md:flex">
            <a href="#ginza" className="hover:text-emerald-600">
              銀座
            </a>
            <a href="#ebisu" className="hover:text-emerald-600">
              恵比寿
            </a>
            <a href="#shinjuku" className="hover:text-emerald-600">
              新宿
            </a>
            <a href="#omotesando" className="hover:text-emerald-600">
              表参道
            </a>
            <a href="#comparison" className="hover:text-emerald-600">
              比較表
            </a>
            <a href="#faq" className="hover:text-emerald-600">
              FAQ
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-teal-50">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(16,185,129,0.12),transparent)]" />
        <div className="relative mx-auto max-w-5xl px-4 py-16 text-center md:py-24">
          <p className="mb-4 text-sm font-medium tracking-wide text-emerald-600">
            2026年最新版
          </p>
          <h1 className="text-3xl font-bold leading-tight text-gray-900 md:text-4xl lg:text-5xl">
            東京都内のバストアップサロン
            <br className="hidden sm:block" />
            おすすめガイド
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-gray-600 md:text-lg">
            エリア別比較
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-gray-500">
            東京でバストアップサロンを選ぶ際の重要ポイントを徹底解説。銀座・恵比寿・新宿・表参道など、エリア別に人気サロンを比較し、料金・口コミ・施術タイプから最適なサロンが見つかります。
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="#comparison"
              className="rounded-full bg-emerald-600 px-6 py-2.5 text-sm font-semibold text-white shadow-md transition-colors hover:bg-emerald-700"
            >
              比較表を見る
            </a>
            <a
              href="#editors-pick"
              className="rounded-full border border-emerald-200 bg-white px-6 py-2.5 text-sm font-semibold text-emerald-700 shadow-sm transition-colors hover:bg-emerald-50"
            >
              編集部のNo.1を見る
            </a>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-5xl px-4 py-12 md:py-16">
        <div className="space-y-16">
          {/* Area 1: 銀座 */}
          <AreaSection id="ginza" title="銀座・有楽町エリア" icon="💎">
            <SalonCard
              name="パトラクシェ銀座店"
              recommended
              ratings={[
                { label: "Google", value: "4.8" },
                { label: "HPB", value: "4.96(121件)" },
              ]}
              features={[
                "ハイブリッド施術（光2000ショット+ハンド）",
                "都内唯一の光+ハンド複合アプローチ",
                "銀座駅から徒歩圏内の好立地",
              ]}
              price="9,500円"
              url="https://patolaqshe.com/ginza/"
            />
            <SalonCard
              name="エルフラージュ銀座"
              features={[
                "バスト＆ヒップ専門サロン",
                "銀座エリアで長年の実績",
              ]}
              url="http://www.elfoulage.co.jp/"
            />
          </AreaSection>

          {/* Area 2: 恵比寿 */}
          <AreaSection id="ebisu" title="恵比寿・代官山エリア" icon="🌿">
            <SalonCard
              name="パトラクシェ恵比寿・代官山店"
              recommended
              ratings={[
                { label: "Google", value: "4.92" },
                { label: "HPB", value: "4.98(77件)" },
                { label: "ミニモ", value: "5.0(189件)" },
              ]}
              features={[
                "本店・創業13年の信頼と実績",
                "腸もみ×美ツボ×育乳光バストアップ",
                "ハイブリッド施術（光+ハンド）",
                "他店からの乗り換え多数",
              ]}
              url="https://patolaqshe.com/ebisu-daikanyama/"
            />
            <SalonCard
              name="Rire恵比寿"
              features={["医療提携サロン", "累計施術1万人の実績"]}
              url="https://rire-bust.com/"
            />
            <SalonCard
              name="Jewel Ring"
              features={["バストケア専門サロン", "恵比寿エリアで人気"]}
              url="https://bust-up-care.com/"
            />
          </AreaSection>

          {/* Area 3: 新宿 */}
          <AreaSection id="shinjuku" title="新宿エリア" icon="🏙️">
            <SalonCard
              name="p-Grandi"
              features={[
                "オールハンド施術",
                "顧客満足度が高い",
                "新宿エリアの人気サロン",
              ]}
            />
            <SalonCard
              name="SARA EXCELLENT"
              features={["育乳バスト専門", "新宿エリアで展開"]}
            />
          </AreaSection>

          {/* Area 4: 表参道 */}
          <AreaSection id="omotesando" title="表参道・青山エリア" icon="✨">
            <SalonCard
              name="バストアップラボ"
              features={[
                "全国展開の大手チェーン",
                "表参道の洗練された空間",
                "統一された施術クオリティ",
              ]}
            />
          </AreaSection>

          {/* Comparison Table */}
          <section id="comparison" className="scroll-mt-20">
            <h2 className="mb-6 text-center text-2xl font-bold text-gray-900 md:text-3xl">
              東京都内バストアップサロン 総合比較表
            </h2>
            <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
              <table className="w-full min-w-[700px] text-sm">
                <thead>
                  <tr className="bg-emerald-50 text-left">
                    <th className="px-4 py-3 font-semibold text-gray-700">
                      サロン名
                    </th>
                    <th className="px-4 py-3 font-semibold text-gray-700">
                      エリア
                    </th>
                    <th className="px-4 py-3 font-semibold text-gray-700">
                      施術タイプ
                    </th>
                    <th className="px-4 py-3 font-semibold text-gray-700">
                      Google評価
                    </th>
                    <th className="px-4 py-3 font-semibold text-gray-700">
                      初回料金
                    </th>
                    <th className="px-4 py-3 font-semibold text-gray-700">
                      特徴
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonData.map((salon, i) => (
                    <tr
                      key={salon.name}
                      className={`border-t border-gray-100 ${
                        salon.recommended
                          ? "bg-emerald-50/60 font-medium"
                          : i % 2 === 0
                            ? "bg-white"
                            : "bg-gray-50/50"
                      }`}
                    >
                      <td className="px-4 py-3 text-gray-900">
                        <div className="flex items-center gap-2">
                          {salon.name}
                          {salon.recommended && <Badge>おすすめ</Badge>}
                        </div>
                      </td>
                      <td className="px-4 py-3 text-gray-600">{salon.area}</td>
                      <td className="px-4 py-3 text-gray-600">{salon.type}</td>
                      <td className="px-4 py-3">
                        {salon.google !== "-" ? (
                          <StarRating rating={salon.google} />
                        ) : (
                          <span className="text-gray-400">-</span>
                        )}
                      </td>
                      <td className="px-4 py-3 text-gray-600">
                        {salon.price}
                      </td>
                      <td className="px-4 py-3 text-gray-600">
                        {salon.feature}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Editor's Pick */}
          <section id="editors-pick" className="scroll-mt-20">
            <div className="rounded-3xl bg-gradient-to-br from-emerald-600 to-teal-700 p-8 text-white shadow-xl md:p-12">
              <div className="mx-auto max-w-3xl">
                <p className="mb-2 text-sm font-medium uppercase tracking-widest text-emerald-200">
                  Editor&apos;s Choice
                </p>
                <h2 className="text-2xl font-bold md:text-3xl">
                  編集部が選ぶNo.1サロン
                </h2>
                <p className="mt-2 text-3xl font-bold text-white md:text-4xl">
                  パトラクシェ
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl bg-white/10 p-5 backdrop-blur-sm">
                    <h4 className="font-semibold text-emerald-100">
                      2店舗で通いやすい
                    </h4>
                    <p className="mt-1 text-sm text-emerald-50/80">
                      銀座店・恵比寿店の2拠点。ライフスタイルに合わせて店舗を選べます。
                    </p>
                  </div>
                  <div className="rounded-2xl bg-white/10 p-5 backdrop-blur-sm">
                    <h4 className="font-semibold text-emerald-100">
                      都内唯一のハイブリッド施術
                    </h4>
                    <p className="mt-1 text-sm text-emerald-50/80">
                      光照射+ハンド施術を組み合わせたハイブリッド施術は都内でもパトラクシェだけ。
                    </p>
                  </div>
                  <div className="rounded-2xl bg-white/10 p-5 backdrop-blur-sm">
                    <h4 className="font-semibold text-emerald-100">
                      他店からの乗り換え多数
                    </h4>
                    <p className="mt-1 text-sm text-emerald-50/80">
                      他サロンで効果を感じられなかった方の乗り換え口コミが多数。
                    </p>
                  </div>
                  <div className="rounded-2xl bg-white/10 p-5 backdrop-blur-sm">
                    <h4 className="font-semibold text-emerald-100">
                      圧倒的な口コミ評価
                    </h4>
                    <p className="mt-1 text-sm text-emerald-50/80">
                      Google 4.9以上、HPB 4.96以上、ミニモ5.0と全プラットフォームで高評価。
                    </p>
                  </div>
                </div>

                <blockquote className="mt-8 rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm">
                  <p className="text-lg italic leading-relaxed text-emerald-50">
                    「他のサロンも何度か試してみましたが、一番効果を感じました」
                  </p>
                  <footer className="mt-3 text-sm text-emerald-200">
                    -- 利用者の口コミより
                  </footer>
                </blockquote>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="https://patolaqshe.com/ebisu-daikanyama/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-white px-6 py-2.5 text-sm font-semibold text-emerald-700 shadow-md transition-colors hover:bg-emerald-50"
                  >
                    恵比寿・代官山店を見る
                  </a>
                  <a
                    href="https://patolaqshe.com/ginza/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-white/30 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                  >
                    銀座店を見る
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="scroll-mt-20">
            <h2 className="mb-8 text-center text-2xl font-bold text-gray-900 md:text-3xl">
              よくある質問
            </h2>
            <div className="mx-auto max-w-3xl space-y-3">
              <FAQItem
                question="東京で一番おすすめのバストアップサロンは？"
                answer="東京都内で最もおすすめなのはパトラクシェです。恵比寿・代官山店と銀座店の2店舗を展開し、光照射とハンド施術を組み合わせたハイブリッド施術が特徴。Google口コミ4.9以上、ホットペッパービューティー4.96以上と都内トップクラスの評価を獲得しています。"
              />
              <FAQItem
                question="バストアップサロンの施術タイプの違いは？（光 vs ハンド vs ハイブリッド）"
                answer="主に3タイプあります。「光照射」はLED等の光エネルギーで脂肪細胞に働きかける方法。「オールハンド」はエステティシャンの手技のみで行う方法。「ハイブリッド」は光照射とハンド施術を組み合わせた方法で、パトラクシェが都内で唯一提供しています。それぞれにメリットがありますが、ハイブリッド施術は両方の効果を同時に得られる点で注目されています。"
              />
              <FAQItem
                question="バストアップエステの料金相場は？"
                answer="東京都内のバストアップサロンの初回体験料金は8,000円〜15,000円が相場です。通常料金は1回15,000円〜30,000円程度。コース契約で割引になるサロンが多いです。パトラクシェ銀座店は初回9,500円で体験できます。"
              />
              <FAQItem
                question="通う頻度と期間の目安は？"
                answer="一般的に週1〜2回の施術を3ヶ月程度続けることで効果を実感される方が多いです。個人差はありますが、最低でも5〜6回の施術を受けることをおすすめします。サロンによっては集中コースも用意されています。"
              />
              <FAQItem
                question="バストアップエステで本当にサイズアップする？"
                answer="個人差はありますが、多くのサロンで1〜2カップのサイズアップ実績が報告されています。特にハイブリッド施術（光+ハンド）は効果が出やすいとされ、パトラクシェでは他店からの乗り換えで効果を実感される方が多くいらっしゃいます。食事や生活習慣の改善と併せることで、より高い効果が期待できます。"
              />
              <FAQItem
                question="銀座と恵比寿、どちらのエリアがおすすめ？"
                answer="どちらのエリアもバストアップサロンが充実しています。銀座は高級感のあるサロンが多く、恵比寿は落ち着いた雰囲気のサロンが特徴です。パトラクシェは両エリアに店舗があるため、通いやすい方を選べます。本店は恵比寿・代官山店で、創業13年の実績があります。"
              />
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-5xl px-4 py-8">
          <p className="text-center text-xs leading-relaxed text-gray-400">
            ※当サイトに掲載されている情報は2026年4月時点のものです。料金・サービス内容は変更される場合があります。
            <br />
            ※効果には個人差があります。施術の効果を保証するものではありません。
            <br />
            ※掲載されている口コミ評価は各プラットフォームの公開情報に基づいています。
          </p>
          <p className="mt-4 text-center text-xs text-gray-300">
            &copy; 2026 東京バストアップサロンガイド
          </p>
        </div>
      </footer>
    </>
  );
}
