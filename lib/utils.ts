import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function scrollToSection(sectionId: string) {
  const element = document.getElementById(sectionId);
  if (element) {
    const offset = 80; // Height of fixed header
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
}

export function formatDate(date: string): string {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short'
  };
  return new Date(date).toLocaleDateString('en-US', options);
}

export function calculateYearsOfExperience(startYear: number): number {
  const currentYear = new Date().getFullYear();
  return currentYear - startYear;
}

export function getInitials(name: string): string {
  return name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase();
}

export function isInViewport(element: HTMLElement): boolean {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

export function debounce<T extends (..._args: any[]) => any>(
  func: T,
  wait: number
): (..._args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;

  return function executedFunction(..._args: Parameters<T>) {
    const later = () => {
      clearTimeout(timeout);
      func(..._args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

export function throttle<T extends (..._args: any[]) => any>(
  func: T,
  limit: number
): (..._args: Parameters<T>) => void {
  let inThrottle: boolean;

  return function executedFunction(..._args: Parameters<T>) {
    if (!inThrottle) {
      func(..._args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}