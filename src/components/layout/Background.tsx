import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react'

/**
 * Full-bleed ShaderGradient water-plane background, matching the
 * devx-workflows presentation deck (blue ramp on a dark base) with a
 * subtle navy vignette to keep foreground content readable.
 */
export function Background() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10">
      <ShaderGradientCanvas
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
        pixelDensity={1}
        fov={45}
      >
        <ShaderGradient
          animate="on"
          type="waterPlane"
          shader="defaults"
          grain="on"
          grainBlending={0.15}
          color1="#0c2180"
          color2="#6583ca"
          color3="#212121"
          brightness={1}
          envPreset="city"
          lightType="3d"
          reflection={0.1}
          cAzimuthAngle={180}
          cDistance={2.8}
          cPolarAngle={80}
          cameraZoom={9.1}
          positionX={0}
          positionY={0}
          positionZ={0}
          rotationX={50}
          rotationY={0}
          rotationZ={-60}
          range="disabled"
          rangeStart={0}
          rangeEnd={40}
          uDensity={1.5}
          uFrequency={0}
          uStrength={1.5}
          uSpeed={0.3}
          uTime={8}
          uAmplitude={0}
        />
      </ShaderGradientCanvas>
      {/* Deep navy/black vignette, lighter center to let the bright blue glow */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_30%,rgba(2,6,23,0.12)_0%,rgba(2,6,23,0.30)_55%,rgba(0,0,0,0.48)_100%)]" />
    </div>
  )
}
