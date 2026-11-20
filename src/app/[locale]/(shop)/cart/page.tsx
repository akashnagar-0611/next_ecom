"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { useCart } from "@/app/[locale]/context/cartContext";

export default function CartPage() {
  const t = useTranslations("Cart");
  const { items, removeFromCart, setQuantity } = useCart();
  const subtotal = items.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0,
  );

  return (
    <main className="mx-auto min-h-full w-full max-w-7xl bg-background px-3 py-5 sm:px-6 sm:py-8 lg:px-8">
      <h1 className="mb-5 text-xl font-bold sm:mb-6 sm:text-2xl">
        {t("title")}
      </h1>

      {items.length === 0 ? (
        <section className="rounded-lg border border-border bg-card p-6 text-center sm:p-10">
          <p className="text-muted-foreground">{t("empty")}</p>
          <Link
            href="/products"
            className="mt-5 inline-flex min-h-11 items-center justify-center rounded-md bg-primary px-5 py-2 font-semibold text-white hover:opacity-90"
          >
            {t("shopNow")}
          </Link>
        </section>
      ) : (
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_20rem]">
          <ul className="space-y-4">
            {items.map(({ product, quantity }) => (
              <li
                key={product.id}
                className="flex min-w-0 gap-4 rounded-lg border border-border bg-card p-3 sm:p-4"
              >
                <div className="relative size-24 shrink-0 overflow-hidden rounded-md bg-muted sm:size-32">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes="128px"
                    className="object-cover"
                  />
                </div>

                <div className="flex min-w-0 flex-1 flex-col justify-between gap-3 sm:flex-row sm:items-center">
                  <div className="min-w-0">
                    <h2 className="truncate font-semibold">{product.title}</h2>
                    <p className="mt-1 text-sm text-muted-foreground">
                      ₹{product.price.toLocaleString("en-IN")}
                    </p>
                    <button
                      type="button"
                      onClick={() => removeFromCart(product.id)}
                      className="mt-2 text-sm text-primary underline-offset-4 hover:underline"
                    >
                      {t("remove")}
                    </button>
                  </div>

                  <label className="flex items-center gap-2 text-sm">
                    <span>{t("quantity")}</span>
                    <input
                      aria-label={`${t("quantity")} ${product.title}`}
                      type="number"
                      min="1"
                      value={quantity}
                      onChange={(event) =>
                        setQuantity(product.id, Number(event.target.value))
                      }
                      className="h-10 w-20 rounded-md border border-input bg-background px-2 text-foreground"
                    />
                  </label>
                </div>
              </li>
            ))}
          </ul>

          <aside className="h-fit rounded-lg border border-border bg-card p-4 sm:p-5">
            <h2 className="text-lg font-semibold">{t("summary")}</h2>
            <div className="mt-4 flex justify-between border-t border-border pt-4 font-semibold">
              <span>{t("subtotal")}</span>
              <span>₹{subtotal.toLocaleString("en-IN")}</span>
            </div>
          </aside>
        </div>
      )}
    </main>
  );
}
