import Head from "next/head"
import { useGlobalState } from "providers/globalState"

export default function SeoMetaFields({ page }) {
    const { site } = useGlobalState()

    const { title, seoMetaTitle, seoMetaDescription } = page

    // The title is either the manually set SEO title or the page title plus the site name
    // The description is only included in the head if it is provided manually

    const seoTitle = seoMetaTitle ? seoMetaTitle : title.replace(/<[^>]*>?/gm, "") + " | " + site.meeting.seoMetaTitle

    return (
        <Head>
            <title>{seoTitle}</title>
            {seoMetaDescription && <meta name="description" content={seoMetaDescription} />}
        </Head>
    )
}
