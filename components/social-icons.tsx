import Link from "next/link"

export function SocialIcons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <Link
        href="https://www.facebook.com/frooshy"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-primary text-white p-3 rounded-full shadow-lg hover:bg-primary/90 transition-all"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
        </svg>
        <span className="sr-only">Facebook</span>
      </Link>
      <Link
        href="https://www.instagram.com/frooshy"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-primary text-white p-3 rounded-full shadow-lg hover:bg-primary/90 transition-all"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
        </svg>
        <span className="sr-only">Instagram</span>
      </Link>
      <Link
        href="https://www.linkedin.com/company/frooshy"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-primary text-white p-3 rounded-full shadow-lg hover:bg-primary/90 transition-all"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect width="4" height="12" x="2" y="9"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
        <span className="sr-only">LinkedIn</span>
      </Link>
      <button className="bg-secondary text-white p-3 rounded-full shadow-lg hover:bg-secondary/90 transition-all">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m5 8 6 6 6-6" />
        </svg>
        <span className="sr-only">Changer de langue</span>
      </button>
    </div>
  )
}
