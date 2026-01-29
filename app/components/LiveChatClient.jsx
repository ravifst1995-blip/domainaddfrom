"use client";

import dynamic from "next/dynamic";

const LiveChatWidget = dynamic(
  () => import("@livechat/widget-react").then((mod) => mod.LiveChatWidget),
  { ssr: false }
);

export default function LiveChatClient() {
  return <LiveChatWidget license="19476814" />;
} 
