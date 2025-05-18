export default function DownloadPage() {
  return (
    <div className="container py-20 pt-32">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
        Download Legends Unbound
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Android Download */}
        <div className="bg-gray-800 rounded-lg p-8 text-center relative">
          <div className="flex justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48" height="48">
              <g>
                <circle cx="24" cy="24" r="20" fill="#A4C639"/>
                <g>
                  <rect x="14" y="20" width="20" height="12" rx="6" fill="#fff"/>
                  <rect x="18" y="32" width="4" height="6" rx="2" fill="#A4C639"/>
                  <rect x="26" y="32" width="4" height="6" rx="2" fill="#A4C639"/>
                  <circle cx="18" cy="26" r="1.5" fill="#A4C639"/>
                  <circle cx="30" cy="26" r="1.5" fill="#A4C639"/>
                  <rect x="12" y="16" width="4" height="2" rx="1" fill="#A4C639" transform="rotate(-30 14 17)"/>
                  <rect x="32" y="16" width="4" height="2" rx="1" fill="#A4C639" transform="rotate(30 34 17)"/>
                </g>
              </g>
            </svg>
          </div>
          <h2 className="text-2xl font-semibold mb-4">Android</h2>
          <p className="text-gray-400 mb-6">
            Version 1.0.0 (APK)
          </p>
          <a
            href="https://drive.google.com/file/d/1BeoUsLfUKrlo_jnmJSGHppZYqrSM0yZK/view?usp=sharing"
            className="btn btn-primary w-full mb-4"
            download
          >
            Download APK
          </a>
          <div className="text-left text-sm text-gray-400 mt-6">
            <h3 className="font-semibold mb-2">Installation Instructions:</h3>
            <ol className="list-decimal list-inside space-y-2">
              <li>Download the APK file</li>
              <li>Open your device's Settings</li>
              <li>Go to Security or Privacy</li>
              <li>Enable "Install from Unknown Sources"</li>
              <li>Open the downloaded APK file</li>
              <li>Follow the installation prompts</li>
            </ol>
          </div>
        </div>

        {/* Windows Download */}
        <div className="bg-gray-800 rounded-lg p-8 text-center relative">
          <img src="/images/final_boss_idle.png" alt="Boss" className="absolute -top-10 left-1/2 -translate-x-1/2 w-16 h-16 object-contain" />
          <div className="w-16 h-16 mx-auto mb-4">
            <svg viewBox="0 0 24 24" fill="currentColor" className="text-blue-500">
              <path d="M0 0h11.377v11.373H0zm12.623 0H24v11.373H12.623zM0 12.623h11.377V24H0zm12.623 0H24V24H12.623z" />
            </svg>
          </div>
          <h2 className="text-2xl font-semibold mb-4">Windows</h2>
          <p className="text-gray-400 mb-6">
            Version 1.0.0 (Installer)
          </p>
          <a
            href="https://drive.google.com/file/d/1r9TuJmSdPE3cWUmDN9jV1gRqFqJlAXFN/view?usp=sharing"
            className="btn btn-primary w-full mb-4"
            download
          >
            Download Exe
          </a>
          <div className="text-left text-sm text-gray-400 mt-6">
            <h3 className="font-semibold mb-2">Installation Instructions:</h3>
            <ol className="list-decimal list-inside space-y-2">
              <li>Run the .exe file</li>
              <li>Follow the installation wizard</li>
              <li>Launch the game from your desktop or start menu</li>
            </ol>
          </div>
        </div>
      </div>

      {/* System Requirements */}
      <div className="mt-16 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">System Requirements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Android</h3>
            <ul className="space-y-2 text-gray-400">
              <li>• OS: Android 8.0 or higher</li>
              <li>• Processor: Quad-core 1.5 GHz or better</li>
              <li>• Memory: 2 GB RAM</li>
              <li>• Graphics: OpenGL ES 3.0 compatible</li>
              <li>• Storage: 500 MB available space</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Windows</h3>
            <ul className="space-y-2 text-gray-400">
              <li>• OS: Windows 10 64-bit</li>
              <li>• Processor: Intel Core i3 or equivalent</li>
              <li>• Memory: 4 GB RAM</li>
              <li>• Graphics: DirectX 11 compatible</li>
              <li>• Storage: 2 GB available space</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Troubleshooting */}
      <div className="mt-16 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6">Troubleshooting</h2>
        <div className="bg-gray-800 rounded-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Common Issues</h3>
          <div className="space-y-4 text-gray-400">
            <div>
              <h4 className="font-semibold text-white">Android Installation Failed</h4>
              <p>Make sure you have enabled "Install from Unknown Sources" in your device settings.</p>
            </div>
            <div>
              <h4 className="font-semibold text-white">Windows Security Warning</h4>
              <p>If you see a security warning, click "More info" and then "Run anyway" to proceed with installation.</p>
            </div>
            <div>
              <h4 className="font-semibold text-white">Game Won't Start</h4>
              <p>Ensure your device meets the minimum system requirements and try restarting your device.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 