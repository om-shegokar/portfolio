import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const alt = `${profile.name} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 20,
          padding: 72,
          backgroundColor: "#090d09",
          fontFamily: "monospace",
        }}
      >
        <div style={{ display: "flex", fontSize: 30, color: "#7f9b81" }}>
          {profile.user}@{profile.host}:~$ whoami
        </div>
        <div style={{ display: "flex", fontSize: 84, color: "#c9dcc9", fontWeight: 700 }}>
          {profile.name.toLowerCase()}
        </div>
        <div style={{ display: "flex", fontSize: 38, color: "#3ddc84" }}>
          {profile.role.toLowerCase()} — {profile.location.toLowerCase()}
        </div>
        <div style={{ display: "flex", fontSize: 38, color: "#3ddc84" }}>&gt;_</div>
      </div>
    ),
    size,
  );
}
