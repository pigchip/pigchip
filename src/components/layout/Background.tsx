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
          grain="off"
          grainBlending={0}
          color1="#2563ff"
          color2="#0a2a7a"
          color3="#03081f"
          brightness={1.45}
          envPreset="city"
          lightType="3d"
          reflection={0.1}
          cAzimuthAngle={180}
          cDistance={3.6}
          cPolarAngle={90}
          cameraZoom={1}
          positionX={0}
          positionY={0}
          positionZ={0}
          rotationX={0}
          rotationY={0}
          rotationZ={0}
          range="disabled"
          rangeStart={0}
          rangeEnd={40}
          uDensity={1.2}
          uFrequency={0}
          uStrength={3.4}
          uSpeed={0.2}
          uTime={0}
          uAmplitude={0}
        />
      </ShaderGradientCanvas>
      {/* Deep navy/black vignette, lighter center to let the bright blue glow */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_30%,rgba(2,6,23,0.18)_0%,rgba(2,6,23,0.40)_55%,rgba(0,0,0,0.62)_100%)]" />
    </div>
  )
}
