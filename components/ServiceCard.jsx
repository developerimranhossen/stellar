function ServiceCard() {
  return (
    <div className="flex flex-col items-start gap-2 w-[384px] h-[259px] p-6 border border-background-stroke-surface bg-background-fill-white rounded-xl">
      <div className="flex flex-col items-start gap-4">
        <div className="flex p-3 justify-center items-center gap-2 border rounded-lg bg-container-fill-primary-soft">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              opacity="0.4"
              d="M5.33203 7.99984C5.33203 5.05432 7.71985 2.6665 10.6654 2.6665H20.4562C21.8707 2.6665 23.2273 3.22841 24.2275 4.2286L27.7699 7.77108C28.7701 8.77127 29.332 10.1278 29.332 11.5423V23.9998C29.332 26.9454 26.9442 29.3332 23.9987 29.3332H10.6654C7.71985 29.3332 5.33203 26.9454 5.33203 23.9998V7.99984Z"
              fill="#D33C85"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11 9.3335C11 8.78121 11.4477 8.3335 12 8.3335L22.6667 8.3335C23.219 8.3335 23.6667 8.78121 23.6667 9.3335C23.6667 9.88578 23.219 10.3335 22.6667 10.3335L12 10.3335C11.4477 10.3335 11 9.88578 11 9.3335Z"
              fill="#D33C85"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11 16C11 15.4477 11.4477 15 12 15H22.6667C23.219 15 23.6667 15.4477 23.6667 16C23.6667 16.5523 23.219 17 22.6667 17H12C11.4477 17 11 16.5523 11 16Z"
              fill="#D33C85"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11 22.6665C11 22.1142 11.4477 21.6665 12 21.6665H17.3333C17.8856 21.6665 18.3333 22.1142 18.3333 22.6665C18.3333 23.2188 17.8856 23.6665 17.3333 23.6665H12C11.4477 23.6665 11 23.2188 11 22.6665Z"
              fill="#D33C85"
            />
          </svg>
        </div>
        <h3 className="text-typography-sub-heading text-[18px] font-semibold leading-7">Online Certificate </h3>
        <p className="h-[93px] text-sm text-typography-body-soft">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
      </div>
    </div>
  );
}

export default ServiceCard;
