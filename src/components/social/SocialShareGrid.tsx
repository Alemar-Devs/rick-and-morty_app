import { 
  FaFacebookF, 
  FaInstagram, 
  FaTwitter, 
  FaLinkedinIn, 
  FaWhatsapp, 
  FaTelegram 
} from "react-icons/fa";

interface SocialShareGridProps {
  className?: string;
}

export function SocialShareGrid({ className = '' }: SocialShareGridProps) {
  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareTitle = "Check out this awesome Rick and Morty Character Explorer!";
  const shareMessage = "Explore the multiverse with this amazing Rick and Morty Character viewer. Check it out!";

  const socialLinks = [
    {
      icon: <FaFacebookF className="w-5 h-5" />,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      label: "Share on Facebook"
    },
    {
      icon: <FaInstagram className="w-5 h-5" />,
      url: `https://www.instagram.com/share?url=${encodeURIComponent(shareUrl)}`,
      label: "Share on Instagram"
    },
    {
      icon: <FaTwitter className="w-5 h-5" />,
      url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`,
      label: "Share on X (Twitter)"
    },
    {
      icon: <FaLinkedinIn className="w-5 h-5" />,
      url: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(shareTitle)}`,
      label: "Share on LinkedIn"
    },
    {
      icon: <FaWhatsapp className="w-5 h-5" />,
      url: `https://wa.me/?text=${encodeURIComponent(shareMessage + " " + shareUrl)}`,
      label: "Share on WhatsApp"
    },
    {
      icon: <FaTelegram className="w-5 h-5" />,
      url: `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareMessage)}`,
      label: "Share on Telegram"
    }
  ];

  return (
    <div className={`flex justify-center gap-3 p-4 ${className}`}>
      {socialLinks.map((social, index) => (
        <a
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="relative p-2.5 rounded-lg transition-all duration-300 hover:scale-110 
                   hover:bg-[#5AE65A]/10 group overflow-hidden
                   before:content-[''] before:absolute before:inset-0 
                   before:border before:border-[#5AE65A]/30 before:rounded-lg before:opacity-0
                   before:transition-opacity group-hover:before:opacity-100
                   after:content-[''] after:absolute after:inset-0 
                   after:bg-[#5AE65A]/5 after:opacity-0 
                   after:transition-opacity hover:after:opacity-100"
          aria-label={social.label}
        >
          <div className="relative z-10 transform transition-all duration-300 
                        text-[#5AE65A] group-hover:text-[#7FFF7F] 
                        group-hover:rotate-12 group-hover:scale-110
                        drop-shadow-[0_0_3px_rgba(90,230,90,0.5)]">
            {social.icon}
          </div>
        </a>
      ))}
    </div>
  );
}
