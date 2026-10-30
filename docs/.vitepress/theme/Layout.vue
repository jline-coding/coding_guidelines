<script setup>
import DefaultTheme, { useSidebar } from 'vitepress/theme'
import { useData, withBase } from 'vitepress'
import { computed } from 'vue'

const { Layout } = DefaultTheme
const { lang } = useData()
const { hasSidebar } = useSidebar()

const isVn = computed(() => lang.value === 'vi')
const logoUrl = withBase('/logo.png')

const t = (vn, ja) => (isVn.value ? vn : ja)
const local = (path) => withBase(isVn.value ? `/vn${path}` : path)

const columns = computed(() => [
  {
    heading: t('Danh mục chính', '主要カテゴリ'),
    links: [
      { text: t('Mục đích & Tư duy cơ bản', '目的・基本的な考え方'), href: local('/intro') },
      { text: t('1. Liên quan đến HTML', '1. HTMLに関して'), href: local('/01-html/') },
      { text: t('3. Về CSS (FLOCSS + BEM)', '3. CSSに関して (FLOCSS + BEM)'), href: local('/03-css/') },
      { text: t('4. Về JavaScript', '4. JavaScriptに関して'), href: local('/04-javascript/') },
    ],
  },
  {
    heading: t('Hệ thống & Bàn giao', 'CMS・納品・公開'),
    links: [
      { text: t('8. Về WordPress', '8. WordPressに関して'), href: local('/08-wordpress/') },
      { text: t('9. Về Form', '9. Formに関して'), href: local('/09-forms/') },
      { text: t('5. Giao hàng & Backup', '5. 納品・バックアップ'), href: local('/05-delivery/') },
      { text: t('11. Công khai & Template', '11. 公開作業・テンプレート'), href: local('/11-launch-and-templates/') },
    ],
  },
  {
    heading: t('Tài nguyên Template', 'テンプレートリソース'),
    links: [
      { text: 'TEMPLATE_HTML (ZIP)', href: 'https://github.com/jline-coding/TEMPLATE_HTML/archive/refs/heads/master.zip', external: true },
      { text: 'TEMPLATE_WP (ZIP)', href: 'https://github.com/jline-coding/TEMPLATE_WP/archive/refs/heads/master.zip', external: true },
      { text: t('🇯🇵 Chuyển sang Tiếng Nhật', '🇻🇳 ベトナム語版へ切り替え'), href: withBase(isVn.value ? '/' : '/vn/') },
    ],
  },
])
</script>

<template>
  <Layout>
    <template #layout-bottom>
      <footer
        class="relative z-10 mt-12 border-t-[3px] border-solid border-x-0 border-b-0 border-primary bg-ink text-white"
        :class="{ 'desk:pl-sidebar': hasSidebar }"
      >
        <div class="mx-auto max-w-[1152px] px-6 pb-7 pt-10 sm:px-12 sm:pb-8 sm:pt-11">
          <div class="grid grid-cols-1 gap-8 border-b border-solid border-x-0 border-t-0 border-white/10 pb-8 xl:grid-cols-[1.2fr_2fr] xl:gap-12">
            <div>
              <a :href="withBase(isVn ? '/vn/' : '/')" class="mb-3.5 inline-block">
                <img :src="logoUrl" alt="J-line Corporation" class="h-8 w-auto object-contain" />
              </a>
              <p class="m-0 max-w-[340px] text-[0.85rem] leading-relaxed text-gray">
                {{
                  t(
                    'Quy chuẩn Coding & Quản lý Chất lượng sản xuất Website thuộc Bộ phận Web Marketing — Công ty J-Line Corporation.',
                    'ジェイ・ライン株式会社 Webマーケティング事業部におけるWeb制作・品質管理のための社内標準コーディングガイドライン。'
                  )
                }}
              </p>
            </div>

            <div class="grid grid-cols-1 gap-6 sm:grid-cols-3">
              <div v-for="col in columns" :key="col.heading">
                <h4 class="m-0 mb-3 inline-block border-b-2 border-solid border-x-0 border-t-0 border-primary pb-1.5 text-[0.86rem] font-bold tracking-wide text-white">
                  {{ col.heading }}
                </h4>
                <ul class="m-0 list-none p-0">
                  <li v-for="link in col.links" :key="link.href" class="mb-2">
                    <a
                      :href="link.href"
                      :target="link.external ? '_blank' : undefined"
                      :rel="link.external ? 'noopener noreferrer' : undefined"
                      class="inline-block text-[0.84rem] text-gray no-underline transition-all duration-200 hover:pl-1 hover:text-white"
                    >
                      {{ link.text }}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="flex flex-wrap items-center justify-between gap-3 pt-5 text-[0.8rem] text-gray">
            <span>Copyright © {{ new Date().getFullYear() }} J-line Corporation. All Rights Reserved.</span>
            <span class="rounded-full border border-solid border-white/15 bg-white/10 px-2.5 py-0.5 text-xs font-semibold text-white">
              Web Marketing Division
            </span>
          </div>
        </div>
      </footer>
    </template>
  </Layout>
</template>
