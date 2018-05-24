export let sizes = [{
    label: 'General Purpose',
    series: [{
        label: 'B-series',
        invalidRegions: [
          'germanycentral',
          'germanynortheast',
          'usgovvirginia',
          'usgovlowa',
          'usgovarizona',
          'usdodeast',
          'usdodcentral',
        ],
        sizes: [{
            size: 'Standard_B1s',
            cpu: 1,
            memory: 1,
          },
          {
            size: 'Standard_B1ms',
            cpu: 1,
            memory: 2,
          },
          {
            size: 'Standard_B2s',
            cpu: 2,
            memory: 4,
          },
          {
            size: 'Standard_B2ms',
            cpu: 2,
            memory: 8,
          },
          {
            size: 'Standard_B4ms',
            cpu: 4,
            memory: 16,
          },
          {
            size: 'Standard_B8ms',
            cpu: 8,
            memory: 32,
          }
        ]
      }, {
        label: 'Dsv3-series',
        invalidRegions: [
          'southindia',
          'usgovvirginia',
          'usgovlowa',
          'usgovarizona',
          'usdodeast',
          'usdodcentral',
        ],
        sizes: [{
            size: 'Standard_D2s_v3',
            cpu: 2,
            memory: 8,
          },
          {
            size: 'Standard_D4s_v3',
            cpu: 4,
            memory: 16,
          },
          {
            size: 'Standard_D8s_v3',
            cpu: 8,
            memory: 32,
          },
          {
            size: 'Standard_D16s_v3',
            cpu: 16,
            memory: 64,
          },
          {
            size: 'Standard_D32s_v3',
            cpu: 32,
            memory: 128,
          },
          {
            size: 'Standard_D64s_v3',
            cpu: 64,
            memory: 256,
          }
        ]
      }, {
        label: 'Dv3-series',
        invalidRegions: [
          'usgovvirginia',
          'usgovlowa',
          'usgovarizona',
          'usdodeast',
          'usdodcentral',
        ],
        sizes: [{
            size: 'Standard_D2_v3',
            cpu: 2,
            memory: 8,
          },
          {
            size: 'Standard_D4_v3',
            cpu: 4,
            memory: 16,
          },
          {
            size: 'Standard_D8_v3',
            cpu: 8,
            memory: 32,
          },
          {
            size: 'Standard_D16_v3',
            cpu: 16,
            memory: 64,
          },
          {
            size: 'Standard_D32_v3',
            cpu: 32,
            memory: 128,
          },
          {
            size: 'Standard_D64_v3',
            cpu: 64,
            memory: 256,
          },
        ]
      },
      {
        label: 'DSv2-series',
        invalidRegions: [
          'usgovlowa',
        ],
        sizes: [{
            size: 'Standard_DS1_v2',
            cpu: 1,
            memory: 3.5,
          },
          {
            size: 'Standard_DS2_v2',
            cpu: 2,
            memory: 7,
          },
          {
            size: 'Standard_DS3_v2',
            cpu: 4,
            memory: 14,
          },
          {
            size: 'Standard_DS4_v2',
            cpu: 8,
            memory: 28,
          },
          {
            size: 'Standard_DS5_v2',
            cpu: 16,
            memory: 56,
          },
        ]
      }, {
        label: 'Dv2-series',
        sizes: [{
            size: 'Standard_D1_v2',
            cpu: 1,
            memory: 3.5,
          },
          {
            size: 'Standard_D2_v2',
            cpu: 2,
            memory: 7,
          },
          {
            size: 'Standard_D3_v2',
            cpu: 4,
            memory: 14,
          },
          {
            size: 'Standard_D4_v2',
            cpu: 8,
            memory: 28,
          },
          {
            size: 'Standard_D5_v2',
            cpu: 16,
            memory: 56,
          }
        ]
      }, {
        label: 'DS-series',
        invalidRegions: [
          'northcentralus',
          'westcentralus',
          'westus2',
          'canadaeast',
          'canadacentral',
          'brazilsouth',
          'francecentral',
          'francesouth',
          'germanycentral',
          'germanynortheast',
          'ukwest',
          'uksouth',
          'australiacentral1',
          'australiacentral2',
          'centralindia',
          'westindia',
          'southindia',
          'koreacentral',
          'koreasouth',
          'usgovlowa',
          'usgovarizona',
          'usgovTexas',
          'usdodeast',
          'usdodcentral',
        ],
        sizes: [{
            size: 'Standard_DS1',
            cpu: 1,
            memory: 3.5,
          },
          {
            size: 'Standard_DS2',
            cpu: 2,
            memory: 7,
          },
          {
            size: 'Standard_DS3',
            cpu: 4,
            memory: 14,
          },
          {
            size: 'Standard_DS4',
            cpu: 8,
            memory: 28,
          }
        ],
      }, {
        label: 'D-series',
        invalidRegions: [
          'westcentralus',
          'westus2',
          'canadaeast',
          'canadacentral',
          'francecentral',
          'francesouth',
          'germanycentral',
          'germanynortheast',
          'ukwest',
          'uksouth',
          'australiacentral1',
          'australiacentral2',
          'centralindia',
          'westindia',
          'southindia',
          'koreacentral',
          'koreasouth',
          'usgovlowa',
          'usgovarizona',
          'usgovTexas',
          'usdodeast',
          'usdodcentral',
        ],
        sizes: [{
            size: 'Standard_D1',
            cpu: 1,
            memory: 3.5,
          },
          {
            size: 'Standard_D2',
            cpu: 2,
            memory: 7,
          },
          {
            size: 'Standard_D3',
            cpu: 4,
            memory: 14,
          },
          {
            size: 'Standard_D4',
            cpu: 8,
            memory: 28,
          }
        ]
      }, {
        label: 'Av2-series',
        sizes: [{
            size: 'Standard_A1_v2',
            cpu: 1,
            memory: 2,
          },
          {
            size: 'Standard_A2_v2',
            cpu: 2,
            memory: 4,
          },
          {
            size: 'Standard_A4_v2',
            cpu: 4,
            memory: 8,
          },
          {
            size: 'Standard_A8_v2',
            cpu: 8,
            memory: 16,
          },
          {
            size: 'Standard_A2m_v2',
            cpu: 2,
            memory: 16,
          },
          {
            size: 'Standard_A4m_v2',
            cpu: 4,
            memory: 32,
          },
          {
            size: 'Standard_A8m_v2',
            cpu: 8,
            memory: 64,
          }
        ]
      }, {
        label: 'A-series',
        sizes: [{
            size: 'Standard_A0',
            cpu: 1,
            memory: 0.75,
          },
          {
            size: 'Standard_A1',
            cpu: 1,
            memory: 1.75,
          },
          {
            size: 'Standard_A2',
            cpu: 2,
            memory: 3.5,
          },
          {
            size: 'Standard_A3',
            cpu: 4,
            memory: 7,
          },
          {
            size: 'Standard_A4',
            cpu: 8,
            memory: 14,
          },
          {
            size: 'Standard_A5',
            cpu: 2,
            memory: 14,
          },
          {
            size: 'Standard_A6',
            cpu: 4,
            memory: 28,
          },
          {
            size: 'Standard_A7',
            cpu: 8,
            memory: 56,
          }
        ]
      },
      {
        label: 'Basic A',
        sizes: [{
            size: 'Basic_A0',
            cpu: 1,
            memory: 0.75,
          },
          {
            size: 'Basic_A1',
            cpu: 1,
            memory: 1.75,
          },
          {
            size: 'Basic_A2',
            cpu: 2,
            memory: 3.5,
          },
          {
            size: 'Basic_A3',
            cpu: 4,
            memory: 7,
          },
          {
            size: 'Basic_A4',
            cpu: 8,
            memory: 14,
          },
        ],
      }
    ]
  },
  {
    label: 'Compute Optimized',
    series: [{
        label: 'Fsv2-series',
        invalidRegions: [
          'centralus',
          'northcentralus',
          'southcentralus',
          'westcentralus',
          'westus',
          'canadaeast',
          'canadacentral',
          'brazilsouth',
          'northeurope',
          'francecentral',
          'francesouth',
          'germanycentral',
          'germanynortheast',
          'ukwest',
          'uksouth',
          'southeastasia',
          'eastasia',
          'australiaeast',
          'australiasoutheast',
          'centralindia',
          'westindia',
          'southindia',
          'japaneast',
          'japanwest',
          'koreacentral',
          'koreasouth',
          'usgovvirginia',
          'usgovlowa',
          'usgovarizona',
          'usgovTexas',
          'usdodeast',
          'usdodcentral',
        ],
        sizes: [{
            size: 'Standard_F2s_v2',
            cpu: 2,
            memory: 4,
          },
          {
            size: 'Standard_F4s_v2',
            cpu: 4,
            memory: 8,
          },
          {
            size: 'Standard_F8s_v2',
            cpu: 8,
            memory: 16,
          },
          {
            size: 'Standard_F16s_v2',
            cpu: 16,
            memory: 32,
          },
          {
            size: 'Standard_F32s_v2',
            cpu: 32,
            memory: 64,
          },
          {
            size: 'Standard_F64s_v2',
            cpu: 64,
            memory: 128,
          },
          {
            size: 'Standard_F72s_v2',
            cpu: 72,
            memory: 144,
          }
        ],
      },
      {
        label: 'Fs-series',
        invalidRegions: [
          'usgovlowa',
        ],
        sizes: [{
            size: 'Standard_F1s',
            cpu: 1,
            memory: 2,
          },
          {
            size: 'Standard_F2s',
            cpu: 2,
            memory: 4,
          },
          {
            size: 'Standard_F4s',
            cpu: 4,
            memory: 8,
          },
          {
            size: 'Standard_F8s',
            cpu: 8,
            memory: 16,
          },
          {
            size: 'Standard_F16s',
            cpu: 16,
            memory: 32,
          },
        ]
      }, {
        label: 'F-series',
        sizes: [{
            size: 'Standard_F1',
            cpu: 1,
            memory: 2,
          },
          {
            size: 'Standard_F2',
            cpu: 2,
            memory: 4,
          },
          {
            size: 'Standard_F4',
            cpu: 4,
            memory: 8,
          },
          {
            size: 'Standard_F8',
            cpu: 8,
            memory: 16,
          },
          {
            size: 'Standard_F16',
            cpu: 16,
            memory: 32,
          },
        ]
      }
    ]
  },
  {
    label: 'Memory Optimized',
    series: [{
        label: 'Esv3-series',
        invalidRegions: [
          'westcentralus',
          'francecentral',
          'francesouth',
          'westindia',
          'usgovvirginia',
          'usgovlowa',
          'usgovarizona',
          'usdodeast',
          'usdodcentral',
        ],
        sizes: [{
            size: 'Standard_E2s_v3',
            cpu: 2,
            memory: 16,
          },
          {
            size: 'Standard_E4s_v3',
            cpu: 4,
            memory: 32,
          },
          {
            size: 'Standard_E8s_v3',
            cpu: 8,
            memory: 64,
          },
          {
            size: 'Standard_E16s_v3',
            cpu: 16,
            memory: 128,
          },
          {
            size: 'Standard_E32s_v3',
            cpu: 32,
            memory: 256,
          },
          {
            size: 'Standard_E64s_v3',
            cpu: 64,
            memory: 432,
          },
          {
            size: 'Standard_E64is_v3',
            cpu: 64,
            memory: 432,
          }
        ]
      },
      {
        label: 'Ev3-series',
        invalidRegions: [
          'westcentralus',
          'usgovvirginia',
          'usgovlowa',
          'usgovarizona',
          'usdodeast',
          'usdodcentral',
        ],
        sizes: [{
            size: 'Standard_E2_v3',
            cpu: 2,
            memory: 16,
          },
          {
            size: 'Standard_E4_v3',
            cpu: 4,
            memory: 32,
          },
          {
            size: 'Standard_E8_v3',
            cpu: 8,
            memory: 64,
          },
          {
            size: 'Standard_E16_v3',
            cpu: 16,
            memory: 128,
          },
          {
            size: 'Standard_E32_v3',
            cpu: 32,
            memory: 256,
          },
          {
            size: 'Standard_E64_v3',
            cpu: 64,
            memory: 432,
          },
          {
            size: 'Standard_E64i_v3',
            cpu: 64,
            memory: 432,
          }
        ]
      },
      {
        label: 'M-series',
        invalidRegions: [
          'eastus',
          'centralus',
          'northcentralus',
          'southcentralus',
          'westcentralus',
          'westus',
          'canadaeast',
          'canadacentral',
          'brazilsouth',
          'northeurope',
          'francecentral',
          'francesouth',
          'germanycentral',
          'germanynortheast',
          'ukwest',
          'eastasia',
          'australiacentral1',
          'australiacentral2',
          'australiaeast',
          'australiasoutheast',
          'centralindia',
          'westindia',
          'southindia',
          'japaneast',
          'japanwest',
          'koreacentral',
          'koreasouth',
          'usgovarizona',
          'usgovTexas',
          'usdodeast',
          'usdodcentral',
        ],
        sizes: [{
            size: 'Standard_M64s',
            cpu: 64,
            memory: 1024,
          },
          {
            size: 'Standard_M64ms',
            cpu: 64,
            memory: 1792,
          },
          {
            size: 'Standard_M128s',
            cpu: 128,
            memory: 2048,
          },
          {
            size: 'Standard_M128ms',
            cpu: 128,
            memory: 3800,
          },
        ]
      },
      {
        label: 'GS-series',
        invalidRegions: [
          'eastus',
          'centralus',
          'northcentralus',
          'southcentralus',
          'westcentralus',
          'westus2',
          'brazilsouth',
          'northeurope',
          'francecentral',
          'francesouth',
          'germanynortheast',
          'ukwest',
          'uksouth',
          'eastasia',
          'australiacentral1',
          'australiacentral2',
          'australiasoutheast',
          'centralindia',
          'westindia',
          'southindia',
          'japanwest',
          'koreacentral',
          'koreasouth',
          'usgovlowa',
          'usgovarizona',
          'usgovTexas',
          'usdodeast',
          'usdodcentral',
        ],
        sizes: [{
            size: 'Standard_GS1',
            cpu: 2,
            memory: 28,
          },
          {
            size: 'Standard_GS2',
            cpu: 4,
            memory: 56,
          },
          {
            size: 'Standard_GS3',
            cpu: 8,
            memory: 112,
          },
          {
            size: 'Standard_GS4',
            cpu: 16,
            memory: 224,
          },
          {
            size: 'Standard_GS5',
            cpu: 32,
            memory: 448,
          }
        ]
      },
      {
        label: 'G-series',
        invalidRegions: [
          'eastus',
          'centralus',
          'northcentralus',
          'southcentralus',
          'westcentralus',
          'brazilsouth',
          'northeurope',
          'francecentral',
          'francesouth',
          'germanynortheast',
          'ukwest',
          'eastasia',
          'australiacentral1',
          'australiacentral2',
          'australiasoutheast',
          'centralindia',
          'westindia',
          'southindia',
          'japanwest',
          'koreacentral',
          'koreasouth',
          'usgovlowa',
          'usgovarizona',
          'usgovTexas',
          'usdodeast',
          'usdodcentral',
        ],
        sizes: [{
            size: 'Standard_G1',
            cpu: 2,
            memory: 28,
          },
          {
            size: 'Standard_G2',
            cpu: 4,
            memory: 56,
          },
          {
            size: 'Standard_G3',
            cpu: 8,
            memory: 112,
          },
          {
            size: 'Standard_G4',
            cpu: 16,
            memory: 224,
          },
          {
            size: 'Standard_G5',
            cpu: 32,
            memory: 448,
          }
        ]
      },
      {
        label: 'DSv2-series',
        invalidRegions: [
          'usgovlowa',
        ],
        sizes: [{
            size: 'Standard_DS11_v2',
            cpu: 2,
            memory: 14,
          },
          {
            size: 'Standard_DS12_v2',
            cpu: 4,
            memory: 28,
          },
          {
            size: 'Standard_DS13_v2',
            cpu: 8,
            memory: 56,
          },
          {
            size: 'Standard_DS14_v2',
            cpu: 16,
            memory: 112,
          },
          {
            size: 'Standard_DS15_v2',
            cpu: 20,
            memory: 140,
          },
        ]
      },
      {
        label: 'Dv2-series',
        sizes: [{
            size: 'Standard_D11_v2',
            cpu: 2,
            memory: 14,
          },
          {
            size: 'Standard_D12_v2',
            cpu: 4,
            memory: 28,
          },
          {
            size: 'Standard_D13_v2',
            cpu: 8,
            memory: 56,
          },
          {
            size: 'Standard_D14_v2',
            cpu: 16,
            memory: 112,
          },
          {
            size: 'Standard_D15_v2',
            cpu: 20,
            memory: 140,
          },
        ]
      },
      {
        label: 'DS-series',
        invalidRegions: [
          'northcentralus',
          'westcentralus',
          'westus2',
          'canadaeast',
          'canadacentral',
          'brazilsouth',
          'francecentral',
          'francesouth',
          'germanycentral',
          'germanynortheast',
          'ukwest',
          'uksouth',
          'australiacentral1',
          'australiacentral2',
          'centralindia',
          'westindia',
          'southindia',
          'koreacentral',
          'koreasouth',
          'usgovlowa',
          'usgovarizona',
          'usgovTexas',
          'usdodeast',
          'usdodcentral',
        ],
        sizes: [{
            size: 'Standard_DS11',
            cpu: 2,
            memory: 14,
          },
          {
            size: 'Standard_DS12',
            cpu: 4,
            memory: 28,
          },
          {
            size: 'Standard_DS13',
            cpu: 8,
            memory: 56,
          },
          {
            size: 'Standard_DS14',
            cpu: 16,
            memory: 112,
          }
        ]
      },
      {
        label: 'D-series',
        invalidRegions: [
          'westcentralus',
          'westus2',
          'canadaeast',
          'canadacentral',
          'francecentral',
          'francesouth',
          'germanycentral',
          'germanynortheast',
          'ukwest',
          'uksouth',
          'australiacentral1',
          'australiacentral2',
          'centralindia',
          'westindia',
          'southindia',
          'koreacentral',
          'koreasouth',
          'usgovlowa',
          'usgovarizona',
          'usgovTexas',
          'usdodeast',
          'usdodcentral',
        ],
        sizes: [{
            size: 'Standard_D11',
            cpu: 2,
            memory: 14,
          },
          {
            size: 'Standard_D12',
            cpu: 4,
            memory: 28,
          },
          {
            size: 'Standard_D13',
            cpu: 8,
            memory: 56,
          },
          {
            size: 'Standard_D14',
            cpu: 16,
            memory: 112,
          }
        ]
      }
    ]
  },
  {
    label: 'Storage Optimized',
    series: [{
      label: 'Ls-series',
      invalidRegions: [
        'eastus',
        'centralus',
        'northcentralus',
        'southcentralus',
        'westcentralus',
        'brazilsouth',
        'northeurope',
        'francecentral',
        'francesouth',
        'germanycentral',
        'germanynortheast',
        'ukwest',
        'eastasia',
        'australiacentral1',
        'australiacentral2',
        'australiasoutheast',
        'centralindia',
        'westindia',
        'southindia',
        'japanwest',
        'koreacentral',
        'koreasouth',
        'usgovlowa',
        'usgovarizona',
        'usgovTexas',
        'usdodeast',
        'usdodcentral',
      ],
      sizes: [{
          size: 'Standard_L4s',
          cpu: 4,
          memory: 32,
        },
        {
          size: 'Standard_L8s',
          cpu: 8,
          memory: 64,
        },
        {
          size: 'Standard_L16s',
          cpu: 16,
          memory: 128,
        },
        {
          size: 'Standard_L32s',
          cpu: 32,
          memory: 256,
        },
      ]
    }]
  },
  {
    label: 'GPU',
    series: [{
        label: 'NC-series',
        invalidRegions: [
          'centralus',
          'westcentralus',
          'westus',
          'canadaeast',
          'canadacentral',
          'brazilsouth',
          'francecentral',
          'francesouth',
          'germanycentral',
          'germanynortheast',
          'ukwest',
          'southeastasia',
          'eastasia',
          'australiacentral1',
          'australiacentral2',
          'australiasoutheast',
          'centralindia',
          'westindia',
          'southindia',
          'japaneast',
          'japanwest',
          'koreacentral',
          'koreasouth',
          'usgovlowa',
          'usgovTexas',
          'usdodeast',
          'usdodcentral',
        ],
        sizes: [{
            size: 'Standard_NC6',
            cpu: 6,
            memory: 56,
          },
          {
            size: 'Standard_NC12',
            cpu: 12,
            memory: 112,
          },
          {
            size: 'Standard_NC24',
            cpu: 24,
            memory: 224,
          },
          {
            size: 'Standard_NC24r',
            cpu: 24,
            memory: 224,
          },
        ]
      },
      {
        label: 'NCv2-series',
        invalidRegions: [
          'eastus2',
          'centralus',
          'northcentralus',
          'southcentralus',
          'westcentralus',
          'westus',
          'canadaeast',
          'canadacentral',
          'brazilsouth',
          'northeurope',
          'francecentral',
          'francesouth',
          'germanycentral',
          'germanynortheast',
          'ukwest',
          'uksouth',
          'eastasia',
          'australiacentral1',
          'australiacentral2',
          'australiaeast',
          'australiasoutheast',
          'centralindia',
          'westindia',
          'southindia',
          'japaneast',
          'japanwest',
          'koreacentral',
          'koreasouth',
          'usgovvirginia',
          'usgovlowa',
          'usgovarizona',
          'usgovTexas',
          'usdodeast',
          'usdodcentral',
        ],
        sizes: [{
            size: 'Standard_NC6s_v2',
            cpu: 6,
            memory: 112,
          },
          {
            size: 'Standard_NC12s_v2',
            cpu: 12,
            memory: 224,
          },
          {
            size: 'Standard_NC24s_v2',
            cpu: 24,
            memory: 448,
          },
          {
            size: 'Standard_NC24rs_v2',
            cpu: 24,
            memory: 448,
          },
        ]
      },
      {
        label: 'NCv3-series',
        invalidRegions: [
          'eastus2',
          'centralus',
          'northcentralus',
          'westcentralus',
          'westus',
          'westus2',
          'canadaeast',
          'canadacentral',
          'brazilsouth',
          'northeurope',
          'francecentral',
          'francesouth',
          'germanycentral',
          'germanynortheast',
          'ukwest',
          'uksouth',
          'eastasia',
          'southeastasia',
          'australiacentral1',
          'australiacentral2',
          'australiaeast',
          'australiasoutheast',
          'centralindia',
          'westindia',
          'southindia',
          'japaneast',
          'japanwest',
          'koreacentral',
          'koreasouth',
          'usgovvirginia',
          'usgovlowa',
          'usgovarizona',
          'usgovTexas',
          'usdodeast',
          'usdodcentral',
        ],
        sizes: [{
            size: 'Standard_NC6s_v3',
            cpu: 6,
            memory: 112,
          },
          {
            size: 'Standard_NC12s_v3',
            cpu: 12,
            memory: 224,
          },
          {
            size: 'Standard_NC24s_v3',
            cpu: 24,
            memory: 448,
          },
          {
            size: 'Standard_NC24rs_v3',
            cpu: 24,
            memory: 448,
          },
        ]
      },
      {
        label: 'ND-series',
        invalidRegions: [
          'eastus2',
          'centralus',
          'northcentralus',
          'southcentralus',
          'westcentralus',
          'westus',
          'canadaeast',
          'canadacentral',
          'brazilsouth',
          'northeurope',
          'francecentral',
          'francesouth',
          'germanycentral',
          'germanynortheast',
          'ukwest',
          'uksouth',
          'eastasia',
          'australiacentral1',
          'australiacentral2',
          'australiaeast',
          'australiasoutheast',
          'centralindia',
          'westindia',
          'southindia',
          'japaneast',
          'japanwest',
          'koreacentral',
          'koreasouth',
          'usgovvirginia',
          'usgovlowa',
          'usgovarizona',
          'usgovTexas',
          'usdodeast',
          'usdodcentral',
        ],
        sizes: [{
            size: 'Standard_ND6s',
            cpu: 6,
            memory: 112,
          },
          {
            size: 'Standard_ND12s',
            cpu: 12,
            memory: 224,
          },
          {
            size: 'Standard_ND24s',
            cpu: 24,
            memory: 448,
          },
          {
            size: 'Standard_ND24rs',
            cpu: 24,
            memory: 448,
          },
        ]
      },
      {
        label: 'NV-series',
        invalidRegions: [
          'centralus',
          'westcentralus',
          'westus',
          'canadaeast',
          'canadacentral',
          'brazilsouth',
          'francecentral',
          'francesouth',
          'germanycentral',
          'germanynortheast',
          'ukwest',
          'eastasia',
          'australiacentral1',
          'australiacentral2',
          'australiasoutheast',
          'westindia',
          'southindia',
          'japanwest',
          'koreacentral',
          'koreasouth',
          'usgovlowa',
          'usgovarizona',
          'usgovTexas',
          'usdodeast',
          'usdodcentral',
        ],
        sizes: [{
            size: 'Standard_NV6',
            cpu: 6,
            memory: 56,
          },
          {
            size: 'Standard_NV12',
            cpu: 12,
            memory: 112,
          },
          {
            size: 'Standard_NV24',
            cpu: 24,
            memory: 224,
          }
        ]
      }
    ]
  },
  {
    label: 'High Performance Compute',
    series: [{
        label: 'H-series',
        invalidRegions: [
          'eastus2',
          'centralus',
          'westcentralus',
          'canadaeast',
          'canadacentral',
          'brazilsouth',
          'francecentral',
          'francesouth',
          'germanycentral',
          'germanynortheast',
          'ukwest',
          'eastasia',
          'australiacentral1',
          'australiacentral2',
          'australiasoutheast',
          'westindia',
          'southindia',
          'japanwest',
          'koreacentral',
          'koreasouth',
          'usgovvirginia',
          'usgovlowa',
          'usgovTexas',
          'usdodeast',
          'usdodcentral',
        ],
        sizes: [{
            size: 'Standard_H8',
            cpu: 8,
            memory: 56,
          },
          {
            size: 'Standard_H16',
            cpu: 16,
            memory: 112,
          },
          {
            size: 'Standard_H8m',
            cpu: 8,
            memory: 112,
          },
          {
            size: 'Standard_H16m',
            cpu: 16,
            memory: 224,
          },
          {
            size: 'Standard_H16r',
            cpu: 16,
            memory: 112,
          },
          {
            size: 'Standard_H16mr',
            cpu: 16,
            memory: 224,
          }
        ]
      },
      {
        label: 'A-series',
        invalidRegions: [
          'westcentralus',
          'westus2',
          'canadaeast',
          'canadacentral',
          'francecentral',
          'francesouth',
          'germanycentral',
          'germanynortheast',
          'ukwest',
          'uksouth',
          'australiacentral1',
          'australiacentral2',
          'australiaeast',
          'australiasoutheast',
          'centralindia',
          'westindia',
          'southindia',
          'koreacentral',
          'koreasouth',
          'usgovvirginia',
          'usgovlowa',
          'usgovarizona',
          'usgovTexas',
          'usdodeast',
          'usdodcentral',
        ],
        sizes: [{
            size: 'Standard_A8',
            cpu: 8,
            memory: 56,
          },
          {
            size: 'Standard_A9',
            cpu: 16,
            memory: 112,
          },
          {
            size: 'Standard_A10',
            cpu: 8,
            memory: 56,
          },
          {
            size: 'Standard_A11',
            cpu: 16,
            memory: 112,
          }
        ]
      }
    ],
  },
];