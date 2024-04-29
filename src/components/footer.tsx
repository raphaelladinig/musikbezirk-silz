export default function Footer() {
  return (
    <footer class="flex bg-black p-3 text-white gap-4">
      <a href="https://www.facebook.com/mbsilz/" class="hover:underline">
        <div class="flex gap-2">
          <img src="/facebook.svg" class="size-5" />
          <p>Facebook</p>
        </div>
      </a>
      <a
        href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=alfred.lercher@gmail.com"
        class="hover:underline"
      >
        <div class="flex gap-3">
          <img src="/envelope-solid.svg" class="size-5" />
          <p>GMail</p>
        </div>
      </a>
    </footer>
  );
}
