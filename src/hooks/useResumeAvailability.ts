import { useEffect, useState } from 'react';
import { profile } from '../data/portfolio';

/**
 * Detects whether a real CV PDF has been published to `public/` without hard-coding a flag.
 * The download action stays hidden while the file is missing or empty, so the page never
 * offers a broken link.
 */
const useResumeAvailability = () => {
  const [available, setAvailable] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    let cancelled = false;

    fetch(profile.resumeUrl, { method: 'HEAD', signal: controller.signal })
      .then((response) => {
        if (cancelled) return;
        const contentType = response.headers.get('content-type') ?? '';
        const lengthHeader = response.headers.get('content-length');
        const hasBody = lengthHeader === null || Number(lengthHeader) > 0;
        setAvailable(response.ok && contentType.includes('pdf') && hasBody);
      })
      .catch(() => {
        if (!cancelled) setAvailable(false);
      });

    return () => {
      cancelled = true;
      controller.abort();
    };
  }, []);

  return available;
};

export default useResumeAvailability;
